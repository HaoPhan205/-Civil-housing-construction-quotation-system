const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
var app = express();
app.use(bodyParser.json());
app.use(cors());
const { sql } = require("./connect");

app.get("/users", async (req, res) => {
  sql
    .query("SELECT * FROM Users")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send("Database connection failed: " + err.message);
    });
});

app.post("/login", async (req, res) => {
  const { UserID, Password } = req.body;
  const request = new sql.Request();
  request.input("UserID", sql.NVarChar, UserID);
  request.input("Password", sql.NVarChar, Password);
  request.query(
    "SELECT * FROM Users WHERE UserID = @UserID AND Password = @Password",
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else if (result.recordset.length > 0) {
        res.send("Login successful");
      } else {
        res.send("Cút");
      }
    }
  );
});

app.post("/register", async (req, res) => {
  const { UserID, Password, UserName } = req.body;
  const request = new sql.Request();
  request.input("UserID", sql.NVarChar, UserID);
  request.input("Password", sql.NVarChar, Password);
  request.input("UserName", sql.NVarChar, UserName);
  var role = "4";
  request.input("UserRole", sql.Int, role);
  request.query(
    "INSERT INTO Users (UserID, Password, UserName, UserRole) VALUES (@UserID, @Password, @UserName, @UserRole)",
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.send("Register successful");
      }
    }
  );
});

//update user
app.put("/update", async (req, res) => {
  const { UserID, Password, UserName } = req.body;
  const request = new sql.Request();
  request.input("UserID", sql.NVarChar, UserID);
  request.input("Password", sql.NVarChar, Password);
  request.input("UserName", sql.NVarChar, UserName);
  request.query(
    "UPDATE Users SET Password = @Password, UserName = @UserName WHERE UserID = @UserID",
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.send("Update successful");
        alert("Update user successful");
      }
    }
  );
});

//Delete user
app.delete("/delete", async (req, res) => {
  const { UserID } = req.body;
  const request = new sql.Request();
  request.input("UserID", sql.NVarChar, UserID);
  request.query("DELETE FROM Users WHERE UserID = @UserID", (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.send("Delete successful");
    }
  });
});

//send to public page
app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
