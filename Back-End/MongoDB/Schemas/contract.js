const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  contractID: {
    type: String,
    required: true,
    unique: true,
  },
  quotationID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  contractDetails: {
    type: String,
    required: true,
  },
  contractDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contract", contractSchema);
