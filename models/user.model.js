const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    imgName: String,
    imgPath: String,
    role: {
      type: String,
      enum: ["BOAT OWNER", "RENTER"],
      default: "RENTER"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
