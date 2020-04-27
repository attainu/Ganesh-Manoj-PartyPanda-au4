const UploadController = {};

let cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "attainu-wanderlust",
  api_key: "285695111156914",
  api_secret: "6GsNv5XlGNm-oAXTiyAFa_yg5Ak",
});

UploadController.upload = async (req, res) => {
  try {
    let image = req.file.path;
    let uploadedImg = await cloudinary.uploader.upload(image);
    res.send(uploadedImg.secure_url);
  } catch (error) {
    throw error;
  }
};

module.exports = UploadController;
