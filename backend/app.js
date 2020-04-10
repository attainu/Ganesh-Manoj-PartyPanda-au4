const express = require("express");
const app = express();
const multer = require("multer");

//multer config
var filestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    var filename = new Date().getTime() + file.originalname;
    return cb(null, filename);
  },
});

var upload = multer({
  storage: filestorage,
});

app.use(express.json());
app.use(express.urlencoded());
app.use("/public", express.static("public"));

const User = require("./Model/User");

// import controller
const controller = require("./controllers/index.js");

//Routes
app.post("/signup", controller.UserController.create);

app.get("/show", controller.UserController.list);

app.post("/profile", upload.single("avatar"), controller.ProfileController.add);

// app.post("/login", async (req, res) => {
//   try {
//     const { body } = req;
//     let user = await User.findOne({ mobile: body.mobile });
//     console.log(user);
//     if (!user) return res.send("Not found!!!");
//     try {
//       if (await bcrypt.compare(body.password, user.password)) {
//         console.log(user);
//         res.send("welcome");
//       } else {
//         res.send({
//           success: false,
//           message: "Wrong Password",
//         });
//       }
//     } catch (error) {
//       res.status(500).send();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = app;
