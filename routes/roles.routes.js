const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

const checkRoles = role => (req, res, next) =>
  req.user && req.user.role === role
    ? next()
    : res.render("index", {
        msg: `Necesitas ser un ${role} para acceder aquí`
      });

router.get("/guest", checkRoles("GUEST"), (req, res, next) =>
  res.render("roles/guest")
);
router.get("/editor", checkRoles("EDITOR"), (req, res, next) =>
  res.render("roles/editor")
);
router.get("/admin", checkRoles("ADMIN"), (req, res, next) =>
  res.render("roles/admin")
);

module.exports = router;
