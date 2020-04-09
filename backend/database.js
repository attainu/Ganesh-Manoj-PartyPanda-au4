const mongoose = require("mongoose");
const User = require("./Model/User");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/partpanda", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  models: {
    User: User,
  },
  connect: connect,
};
