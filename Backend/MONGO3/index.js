const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then(console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/FakeWhatsapp");
}

//Index Route
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    //   console.log(chats);
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

//New Route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found");
  res.render("new.ejs");
});

//Create Route
app.post("/chats", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      message: msg,
      created_at: new Date(),
    });

    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

function asuncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//NEW - Show Route
app.get(
  "/chats/:id",
  asuncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(500, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
  })
);

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

//Update Route (Chat Edit Route)
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { message: newMsg },
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//Destroy Route
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

app.get("/", (req, res) => {
  res.send("root is working");
});

const handleCastError = (err) => {
  console.log("This was a cast error");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "CastError") {
    err = handleCastError(err);
  }
  next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log(`Server is running at port 8080`);
});
