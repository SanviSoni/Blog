const UserCollection = require("../models/userSchema");
const BLOG = require("../models/blogSchema");

exports.indexHomepage = async (req, res, next) => {
  const allBlogs = await BLOG.find();
  console.log(allBlogs);
  res.render("index", { allBlogs });
};

exports.Createpage = (req, res, next) => {
  res.render("create", { user: req.user });
};

exports.Aboutpage = (req, res, next) => {
  res.render("about");
};

exports.Contact = (req, res, next) => {
  res.render("contact");
};

exports.LoginPage = (req, res, next) => {
  res.render("login");
};

exports.RegisterPage = (req, res, next) => {
  res.render("register");
};

exports.UploadimagePage = (req, res, next) => {
  res.render("profile");
};

exports.descriptionPage = async (req, res, next) => {
  try {
    const data = await BLOG.findById(req.params.id);
    res.render('description', { data: data });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
