const express = require("express");
const app = express();
const db = require("./database");
const multer = require("multer");
const cors = require("cors");
const messagebird = require("messagebird")("3uME3agK875dtxnjIw7ar5AhT");

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

//image uploader
app.post(
  "/uploader",
  upload.single("avatar"),
  controller.UploadController.upload
);

//Signup
app.post("/signup", controller.UserController.create);

app.get("/show", controller.UserController.list);

app.get("/one", controller.UserController.one);

// login
app.post("/login", controller.LoginController.login);
//Profile
app.post("/profile", controller.ProfileController.add);

//to update aal the fileds in profile
app.post("/update-profile", controller.ProfileController.updateAll);

app.put("/update-password/:mobile", controller.ProfileController.updatePass);
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
app.post("/create-event", controller.EventController.create);
//Get all the events
app.get("/events", controller.EventController.list);

// Get one event;
app.get("/event", controller.EventController.one);

//update status of event
app.put("/update-status", controller.EventController.status);

// update event
app.put("/event", controller.EventController.update);

//Delete event
app.delete("/event", controller.EventController.delete);

// Guest
app.post("/join", controller.GuestController.add);
app.put("/join", controller.GuestController.update);
app.get("/join", controller.GuestController.list);
// app.delete("/join", controller.GuestController.delete);

//Forget password

app.post("/step1", async (req, res) => {
  try {
    let mobile = req.body.forget;
    console.log("Mobile", mobile);

    let user = await User.findOne({ mobile: mobile });

    if (!user) return res.send("Mobile Number Not found");

    messagebird.verify.create(
      user.mobile,
      {
        template: "This is a test message %token",
      },
      function (error, success) {
        if (error) {
          console.log("Failed to send otp", error);
          res.send("Failed to send otp");
        } else {
          console.log("Success", success);
          res.send(success);
        }
      }
    );
  } catch (error) {
    throw error;
  }
});

app.post("/step2", (req, res) => {
  let id = req.body.id;
  let token = req.body.token;

  messagebird.verify.verify(id, token, function (error, success) {
    if (error) {
      console.log("Verification failed", error);
      res.send(error);
    } else {
      res.send("Verified");
    }
  });
});

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
