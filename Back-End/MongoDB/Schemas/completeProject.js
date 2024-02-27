const mongoose = require("mongoose");
// Define the schema
const completeProjectSchema = new mongoose.Schema({
  contractorID: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CompleteProject", completeProjectSchema);
