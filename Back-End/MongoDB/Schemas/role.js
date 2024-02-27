const mongoose = require("mongoose");

// Define the schema

const roleSchema = new mongoose.Schema({
  roleID: {
    type: String,
    required: true,
    unique: true,
  },
  roleName: {
    type: String,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("Role", roleSchema);
