const User = require("./../Model/User");
const moment = require("moment");

const ProfileController = {};

ProfileController.add = async (req, res) => {
  try {
    const { query, body } = req;

    await User.findOneAndUpdate(
      { _id: query.id },
      {
        location: body.location,
        gender: body.gender,
        name: body.name,
        email: body.email,
        interest: body.interest,
        location: body.location,
        gender: body.gender,
        bio: body.bio,
        dob: moment.utc(body.dob),
        profession: body.profession,
        company: body.company,
        image: body.avatar,
      },
      { new: true },
      (error, response) => {
        if (error) {
          throw error;
        }
        console.log("updated");
      }
    );

    let user = await User.findOne({ _id: query.id });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

module.exports = ProfileController;
