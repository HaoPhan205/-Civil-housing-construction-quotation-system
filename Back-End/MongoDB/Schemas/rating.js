const mongoose = require("mongoose");

// Define the schema
const ratingSchema = new mongoose.Schema({
  ratingID: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model("Rating", ratingSchema);
