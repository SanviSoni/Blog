var express = require("express");
const { isLoggedIn } = require("../middleware/auth");
var router = express.Router();
const {
  indexHomepage,
  Createpage,
  Aboutpage,
  Contact,
  LoginPage,
  RegisterPage,
  UploadimagePage,
  descriptionPage,
} = require("../controllers/indexControllers");
/* GET home page. */
router.get("/", indexHomepage);

router.get("/create", Createpage);

router.get("/about", Aboutpage);

router.get("/contact", Contact);

router.get("/login", LoginPage);

router.get("/register", RegisterPage);

router.get("/description/:id", descriptionPage);

// router.get("/uploadimage", UploadimagePage);
module.exports = router;
