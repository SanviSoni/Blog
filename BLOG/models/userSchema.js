const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog",
      },
    ],
  },
  { timestamps: true }
);

userSchema.plugin(plm);

const UserCollection = mongoose.model("user", userSchema);

module.exports = UserCollection;
