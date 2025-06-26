const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req,res,next)=>{
//     console.log("Hi, i am 1st Middleware")
//     // res.send("Middleware is running")
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("Hi, i am 2nd Middleware")
//     // res.send("Middleware is running")
//     next()
// })

// API Token as Query String
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  // return res.send("Access Denied");
  throw new ExpressError(401,"Access Denied");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});


app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.get("/", (req, res) => {
  res.send("Hi, i am root");
});

app.get("/err",(req,res)=>{
  abcd=abcd
})

app.get("/admin",(re,res)=>{
  throw new ExpressError(403,"Access to admin is forbidden")
})

// app.use((err, req,res,next)=>{
//   console.log("--------Error Occured ---------")
//   // next(err);
//   res.send(err)
// })

app.use((err, req,res,next)=>{
  let {status=500, message="Some Error Occured"}= err
  res.status(status).send(message)
})

app.use((err, req,res,next)=>{
  console.log("--------Error 2 Middleware ---------")
  next(err);
})
 
// app.use((req,res)=>{
//   res.status(404).send("Page Not Found")
// })

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
