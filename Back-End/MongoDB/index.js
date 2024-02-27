const { connect } = require("mongoose");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//import models
const User = require("./Schemas/user");

// Connect to the database
try {
  connect(process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected to the database"));
} catch (error) {
  console.error("Failed to connect to the database:", error);
}

// Routes
app.post("/signup", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json(user);
      console.log(user);
    })
    .catch((err) => res.json(err));
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json({ message: "Sai tài khoản / mật khẩu" });
      }
    } else {
      res.json({ message: "Không tìm thấy người dùng này" });
    }
  });
});

app.listen(3001, () => console.log("Server is running on port 3001"));
