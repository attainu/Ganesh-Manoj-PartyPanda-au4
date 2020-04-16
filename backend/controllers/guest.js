const Guest = require("./../Model/Guest");
const User = require("./../Model/User");
const Event = require("./../Model/Guest");

const GuestController = {};

GuestController.add = async (req, res) => {
  const { query } = req;

  try {
    let guest = await Guest.create({
      user: query.user_id,
      party: query.party_id,
      status: false,
    });
    res.send(guest);
  } catch (error) {
    throw error;
  }
};

GuestController.list = async (req, res) => {
  try {
    let guest = Guest.find({})
      .populate("user")
      .populate({
        path: "party",
        modal: "Event",
        populate: { path: "host", modal: "User" },
      })
      .exec(function (err, data) {
        if (!err) {
          res.json(data);
        } else {
          console.log("err err err", err);
        }
      });
  } catch (error) {
    throw error;
  }
};

GuestController.update = async (req, res) => {
  let { query } = req;
  try {
    await Guest.findOneAndUpdate(
      { _id: query.id },
      { status: query.status },
      { new: true },
      (error, success) => {
        if (error) {
          return res.send(500, {
            status: false,
            message: "failed to update",
          });
        } else {
          return res.send(200, {
            status: true,
            message: "Successfully updated",
          });
        }
      }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = GuestController;
