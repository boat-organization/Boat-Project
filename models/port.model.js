const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portModel = new Schema({
    name: String,
    country: String,
    url: String,
    location: {
      type: { type: String, default: "Point"},
      coordinates: [Number]
    }
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  });

portModel.index({ location: '2dsphere' })
module.exports = mongoose.model('Port', portModel)





