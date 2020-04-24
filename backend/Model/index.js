// const mongoose = require("mongoose");

// import models

const User = require("./User");
const Event = require("./Event");
const Guest = require("./Guest");
const Feedback = require("./Feedback");

// const connect = () => {
//   return mongoose.connect("mongodb://localhost:27017/partpanda", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

module.exports = {
  models: {
    User: User,
    Event: Event,
    Guest: Guest,
    Feedback: Feedback,
  },
  // connect: connect,
};
