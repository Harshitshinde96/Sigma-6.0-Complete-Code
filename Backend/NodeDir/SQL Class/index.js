const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view enigne", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sigma_app",
  password: "HS65@sql",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Home Route
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//showusers Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // res.send(result)
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//UPDATE (DB) Route
// app.patch("/user/:id", (req, res) => {
//   let { id } = req.params;
//   let { password: formPass, username: newUsername } = req.body;
//   let q = `SELECT * FROM user where id='${id}'`;

//   try {
//     connection.query(q, (err, result) => {
//       if (err) throw err;
//       let user = result[0];
//       if (formPass != user.password) {
//         res.send("wrong pass");
//       } else {
//         let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
//         connection.query(q2, (err, result) => {
//           if (err) throw err;
//           res.redirect("/user");
//         });
//       }
//       res.send(user);
//     });
//   } catch (err) {
//     console.log(err);
//     res.send("some error in DB");
//   }
// });

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) {
        console.error(err);
        return res.send("some error in DB");  // ✅ Add `return`
      }

      let user = result[0];

      if (!user) {
        return res.send("User not found");   // ✅ Handle invalid user ID
      }

      if (formPass !== user.password) {
        return res.send("wrong pass");       // ✅ Add `return`
      }

      let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
      connection.query(q2, (err, result) => {
        if (err) {
          console.error(err);
          return res.send("Failed to update user");  // ✅ Add `return`
        }
        res.redirect("/user");              // ✅ Final response
      });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


app.listen("8080", () => {
  console.log("Server is running on port 8080");
});

// Inserting 100 random users into the database
// let q = "INSERT INTO user (id,username,email,password) values ?";
// let data = [];

// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); // (100 Fake users)pushing the random user data into the data array
// }
