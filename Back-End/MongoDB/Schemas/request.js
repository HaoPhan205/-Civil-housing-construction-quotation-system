const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  requestID: {
    type: String,
    required: true,
    unique: true,
  },
  customerID: {
    type: String,
    required: true,
  },
  contractorID: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Request", requestSchema);
