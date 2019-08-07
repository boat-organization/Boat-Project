const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boatModel = new Schema(
  {
    name: String,
    type: String,
    capacity: Number,
    captain: Boolean,
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    port: { type: Schema.Types.ObjectId, ref: "Port" },
    description: String,
    rate: Number,
    imgName: String,
    imgPath: String
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  }
);

const Boat = mongoose.model("Boat", boatModel);

module.exports = Boat;
