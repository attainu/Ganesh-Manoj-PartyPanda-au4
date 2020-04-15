const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
    },
    interest: {
      type: String,
    },
    location: {
      type: String,
    },
    gender: {
      type: String,
    },
    bio: {
      type: String,
    },
    dob: {
      type: Date,
    },
    image: {
      type: String,
    },
    profession: {
      type: String,
    },
    company: { type: String },
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
