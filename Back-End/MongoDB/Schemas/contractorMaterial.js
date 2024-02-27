const mongoose = require("mongoose");

const contractorMaterialSchema = new mongoose.Schema({
  contractorMaterialID: {
    type: String,
    required: true,
    unique: true,
  },
  contractorID: {
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

module.exports = mongoose.model("ContractorMaterial", contractorMaterialSchema);
