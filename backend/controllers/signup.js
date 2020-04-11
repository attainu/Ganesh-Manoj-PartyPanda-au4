const User = require("./../Model/User");

const bcrypt = require("bcrypt");

const UserController = {};

UserController.create = async (req, res) => {
  try {
    const { body } = req;

    const hashed = await bcrypt.hash(body.password, 10);
    let user = await User.create({
      mobile: body.mobile,
      password: hashed,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

UserController.list = async (req, res) => {
  try {
    let user = await User.find({});
    res.send(user);
  } catch (error) {
    res.send(500);
  }
};

module.exports = UserController;
