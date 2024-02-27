const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   userID: {
//     type: String,
//     required: false,
//     unique: true,
//   },
//   username: {
//     type: String,
//     required: false,
//   },
//   password: {
//     type: String,
//     required: false,
//   },
//   roleID: {
//     type: String,
//     required: false,
//   },
//   avatarImage: {
//     type: String,
//     required: false,
//   },
//   dateOfBirth: {
//     type: Date,
//     required: false,
//   },
//   address: {
//     type: String,
//     required: false,
//   },
//   email: {
//     type: String,
//     required: false,
//   },
//   phone: {
//     type: String,
//     required: false,
//   },
//   status: {
//     type: Boolean,
//     required: false,
//   },
//   ContractorID: {
//     type: String,
//     required: false,
//   },
// });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
