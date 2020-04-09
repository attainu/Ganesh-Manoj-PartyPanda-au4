const express = require("express");
const app = express();
const moment = require("moment");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.urlencoded());
app.use("/public", express.static("public"));

const User = require("./Model/User");

app.post("/signup", async (req, res) => {
  try {
    const { body } = req;
    const hashed = await bcrypt.hash(body.password, 10);
    let user = await User.create({
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      password: hashed,
      interest: body.interest,
      bio: body.bio,
      dob: moment(body.dob, "DD/MM/YYYY").format(),
      image: body.image,
      profession: body.profession,
      company: body.company,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

// app.post("/login", async (req, res) => {
//   try {
//     const { body } = req;
//     let user = await User.findOne({ mobile: body.mobile });

//     if (!user) return res.send("Not found!!!");
//     await bcrypt.compare(body.password, user.password, function (err, match) {
//       if (err) throw new Error(err);
//       else if (match == false) {
//         return res.json({
//           success: false,
//           message: "Wrong Password",
//         });
//       } else {
//         res.send(user);
//         return;
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = app;
