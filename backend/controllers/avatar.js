const User = require("../Model/User");

const AvatarController = {};

let cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "attainu-wanderlust",
  api_key: "285695111156914",
  api_secret: "6GsNv5XlGNm-oAXTiyAFa_yg5Ak",
});

AvatarController.add = async (req, res) => {
  try {
    const { query } = req;

    console.log("query", query);
    let image = req.file.path;
    let uploadedImg = await cloudinary.uploader.upload(image);
    console.log("Img", uploadedImg);

    let updated = await User.findOneAndUpdate(
      { mobile: query.mobile },
      { image: uploadedImg.url },
      { new: true }
    );
    console.log("updated", updated);

    let user = await User.find({});
    res.send(user);
  } catch (error) {
    throw error;
  }
};

module.exports = AvatarController;
