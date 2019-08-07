const express = require("express");
const router = express.Router();

const Boat = require("../models/boat.model");
const Port = require("../models/port.model");

const uploadCloud = require("../config/cloudinary.config");

function checkRoles(role) {
  return function(req, res, next) {
    if (req.user.role === role) {
      return next();
    } else {
      res.redirect("/login");
    }
  };
}

//! EDICIÓN DE UN BARCO

//! ELIMINAR BARCO

module.exports = router;
