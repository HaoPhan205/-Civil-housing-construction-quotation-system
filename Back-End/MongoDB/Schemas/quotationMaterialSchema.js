const mongoose = require("mongoose");

const quotationMaterialSchema = new mongoose.Schema({
  quotationMaterialID: {
    type: String,
    required: true,
    unique: true,
  },
  quotationID: {
    type: String,
    required: true,
  },
  materialID: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("QuotationMaterial", quotationMaterialSchema);
