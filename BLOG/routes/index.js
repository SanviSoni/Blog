var express = require("express");
const { isLoggedIn } = require("../middleware/auth");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", isLoggedIn, (req, res, next) => {
  res.render("create", { user: req.user });
}),
  router.get("/about", (req, res, next) => {
    res.render("about");
  }),
  router.get("/contact", (req, res, next) => {
    res.render("contact");
  }),
  router.get("/login", (req, res, next) => {
    res.render("login");
  }),
  router.get("/register", (req, res, next) => {
    res.render("register");
  }),
 
  
  
  
  ((module.exports = router));
