var express = require("express");
const passport = require("passport");
var router = express.Router();
const UserCollection = require("../models/userSchema");
const LocalStategy = require("passport-local");
const { isLoggedIn } = require("../middleware/auth");
const BLOG = require("../models/blogSchema");
const imagekit = require("../utils/imagekit");

passport.use(new LocalStategy(UserCollection.authenticate()));

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const unchangable = { username, email };
    const ecrypted = password;
    await UserCollection.register(unchangable, ecrypted);
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/users/profile",
    failureRedirect: "/login",
  }),
  (req, res, next) => {}
);

router.get("/logout", isLoggedIn, async (req, res, next) => {
  req.logout();
  res.redirect("/login", { user: req.user });
});

router.post("/create", isLoggedIn, async (req, res, next) => {
  let newBlog = new BLOG({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    blogImage: req.body.blogImage,
    createdBy: req.user._id,
  });

  
  await newBlog.save();
  req.user.blogs.push(newBlog._id);
  await req.user.save();

  res.redirect("/users/profile");
});

router.get("/profile", isLoggedIn, async (req, res, next) => {
  const user = await UserCollection.findById(req.user._id).populate("blogs");
  console.log(user);

  res.render("profile", { user });
});

router.post("/uploadimage/:id", async (req, res, next) => {
  console.log(req.params.id);

  const user = await UserCollection.findById(req.params.id);

  console.log(req.files);
  const { fileId, url, thumbnailUrl } = await imagekit.upload({
    file: req.files.avatar.data,
    fileName: req.files.avatar.name,
  });
  user.profile = url;
  await user.save();
  console.log(user);
  res.render("profile", { user });
});

module.exports = router;
