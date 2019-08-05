const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portModel = new Schema(
  {
    name: String,
    coordinates: String
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  }
);

module.exports = mongoose.model("Port", portModel);
