const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user.model");
const ensuredLoggedIn = require("connect-ensure-login");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const uploadCloud = require("../config/cloudinary.config");

//! ----------------- ROUTES ----------------- !//

//! LOGIN
router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/user/search",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

//! SIGNUP

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", uploadCloud.single("photo"), (req, res, next) => {
  const { username, password, email, role } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }).then(user => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      imgPath,
      imgName,
      email,
      role
    });

    newUser
      .save()
      .then(() => {
        res.redirect("/auth/login");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      });
  });
});

//! LOGOUT
//Al hacer clickear LOGOUT, te redirige a INDEX

router.get("/logout", ensureLogin.ensureLogin(), (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
