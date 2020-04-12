const Event = require("../Model/Event");

const EventController = {};

let cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "attainu-wanderlust",
  api_key: "285695111156914",
  api_secret: "6GsNv5XlGNm-oAXTiyAFa_yg5Ak",
});

EventController.create = async (req, res) => {
  try {
    const { body, params } = req;

    let image = req.file.path;
    let uploadedImg = await cloudinary.uploader.upload(image);
    console.log("Img", uploadedImg);

    let event = await Event.create({
      type: body.type,
      theme: body.theme,
      music: body.music,
      location: body.location,
      exact_location: body.exact_location,
      date: body.date,
      start_time: body.start_time,
      end_timing: body.end_timing,
      strength: body.strength,
      charges: body.charges,
      beverages: body.beverages,
      smoking: body.smoking,
      parking: body.parking,
      stayover: body.stayover,
      details: body.details,
      image: uploadedImg,
      user_id: params.user_id,
    });

    res.send(event);
  } catch (error) {
    throw error;
  }
};

EventController.list = async (req, res) => {
  try {
    let events = await Event.find({});
    res.send(events);
  } catch (error) {
    throw error;
  }
};

EventController.one = async (req, res) => {
  try {
    let { params } = req;
    let event = await Event.findOne({ _id: params.id });
    res.send(event);
  } catch (error) {
    throw error;
  }
};

EventController.update = async (req, res) => {
  try {
    let { body, params } = req;

    let image = req.file.path;
    let uploadedImg = await cloudinary.uploader.upload(image);
    console.log("Img", uploadedImg);

    let event = await Event.findOneAndUpdate(
      { _id: params.id },
      {
        type: body.type,
        theme: body.theme,
        music: body.music,
        location: body.location,
        exact_location: body.exact_location,
        date: body.date,
        start_time: body.start_time,
        end_timing: body.end_timing,
        strength: body.strength,
        charges: body.charges,
        beverages: body.beverages,
        smoking: body.smoking,
        parking: body.parking,
        stayover: body.stayover,
        details: body.details,
        image: uploadedImg,
        user_id: params.user_id,
      },
      { new: true }
    );
    console.log("updated", event);
    res.send("Updated");
  } catch (error) {
    throw error;
  }
};

EventController.delete = async (req, res) => {
  try {
    let { params } = req;

    let event = await Event.deleteOne({ _id: params.id });
    console.log("deleted", event);
    res.send("Deleted");
  } catch (error) {
    throw error;
  }
};

module.exports = EventController;
