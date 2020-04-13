const express = require("express");
const app = express();
const db = require("./database");
const multer = require("multer");
const cors = require("cors");

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
app.use(cors());
app.use("/public", express.static("public"));

const User = require("./Model/User");

// import controller
const controller = require("./controllers/index.js");

//Routes

//Signup
app.post("/signup", controller.UserController.create);

app.get("/show", controller.UserController.list);

// login
app.post("/login", controller.LoginController.login);
//Profile
app.post(
  "/profile/:user_id",
  upload.single("avatar"),
  controller.ProfileController.add
);

//Avatar
//update
app.post(
  "/avatar/:user_id",
  upload.single("avatar"),
  controller.AvatarController.add
);
//remove
app.delete("/avatar/:user_id", controller.AvatarController.remove);

//Create event
app.post(
  "/create-event/:user_id",
  upload.single("cover"),
  controller.EventController.create
);
//Get all the events
app.get("/events", controller.EventController.list);

// Get one event;
app.get("/event/:id", controller.EventController.one);

// update event
app.put(
  "/event/:id",
  upload.single("cover"),
  controller.EventController.update
);

//Delete event
app.delete("/event/:id", controller.EventController.delete);
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
