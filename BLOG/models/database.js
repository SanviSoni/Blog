const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};
