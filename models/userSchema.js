const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
    },
  ],

  profile: {
    type: String,
    url: "",
    default:
      "https://i.pinimg.com/474x/41/34/f3/4134f3721c0b9186de6714a5ec144841.jpg",
  },
});

userSchema.plugin(plm);

const UserCollection = mongoose.model("user", userSchema);

module.exports = UserCollection;
