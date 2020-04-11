const mongoose = require("mongoose");

// import models

const User = require("./User");
const Event = require("./Event");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/partpanda", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  models: {
    User: User,
    Event: Event,
  },
  connect: connect,
};
