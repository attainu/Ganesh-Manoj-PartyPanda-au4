const User = require("./../Model/User");
const moment = require("moment");

const ProfileController = {};

let cloudinary = require("cloudinary").v2;

let uploadedImg;

cloudinary.config({
  cloud_name: "attainu-wanderlust",
  api_key: "285695111156914",
  api_secret: "6GsNv5XlGNm-oAXTiyAFa_yg5Ak",
});

ProfileController.add = async (req, res) => {
  try {
    const { params } = req;
    let image = req.file.path;
    await cloudinary.uploader.upload(image, function (error, response) {
      if (error) {
        return callback({ status: false, message: error });
      }
      console.log(response);
      uploadedImg = response.secure_url;
    });

    await User.findOneAndUpdate(
      { mobile: params.mobile },
      {
        name: body.name,
        email: body.email,
        interest: body.interest,
        bio: body.bio,
        dob: moment(body.dob, "DD/MM/YYYY").format(),
        profession: body.profession,
        company: body.company,
        image: uploadedImg,
      },
      { new: true },
      (error, response) => {
        if (error) {
          throw error;
        }
        console.log("updated", response);
      }
    );

    let user = await User.find({});
    res.send(user);
  } catch (error) {
    throw error;
  }
};

module.exports = ProfileController;
