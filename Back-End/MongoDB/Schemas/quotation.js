const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema({
  quotationID: {
    type: String,
    required: true,
    unique: true,
  },
  requestID: {
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
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Quotation", quotationSchema);
