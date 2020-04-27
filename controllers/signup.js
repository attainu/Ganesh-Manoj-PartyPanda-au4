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
    res.send("You have Successfully Signup!");
  } catch (error) {
    res.send("This mobile Number is already use ! Try different Number.");
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

UserController.one = async (req, res) => {
  try {
    let { query } = req;
    let user = await User.findOne({ _id: query.id });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

module.exports = UserController;
