const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    blogImage: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const BLOG = mongoose.model("blog", blogSchema);

module.exports = BLOG;
