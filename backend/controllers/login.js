const User = require("./../Model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = "manojAndGanesh";
const LoginController = {};

LoginController.login = (req, res) => {
  const { mobile } = req.body;
  User.findOne({ mobile }, (err, user) => {
    if (err) {
      console.log(err);
      res.json({
        error: "internal error please try again",
      });
    } else if (!user) {
      res.json({
        error: "Incorrect mobile or password!",
      });
    } else {
      console.log(user);
      bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
        if (err) {
          console.log(err);
          res.json({
            error: "internal error please try again",
          });
        } else if (!isMatch) {
          res.json({
            error: "Incorrect email or password!",
          });
        } else {
          const payload = {
            id: user._id,
            mobile: req.body.mobile,
          };
          jwt.sign(payload, secret, { expiresIn: "5m" }, (err, token) => {
            if (token) {
              console.log(token);
              res.json({
                token: token,
              });
            } else {
              res.send(err);
            }
          });
        }
      });
    }
  });
};

module.exports = LoginController;
