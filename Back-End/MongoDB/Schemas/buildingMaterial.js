const mongoose = require("mongoose");

const buildingMaterialSchema = new mongoose.Schema({
  materialID: {
    type: String,
    required: true,
    unique: true,
  },
  materialName: {
    type: String,
    required: true,
  },
  materialType: {
    type: String,
    required: true,
  },
  materialPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BuildingMaterial", buildingMaterialSchema);
