const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  let isLoggedOut = req.user === undefined; // variable para saber si es owner
  res.render("index", { isLoggedOut });
});

module.exports = router;
