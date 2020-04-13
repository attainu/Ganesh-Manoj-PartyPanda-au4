const Guest = require("./../Model/Guest");
const User = require("./../Model/User");

const GuestController = {};

GuestController.add = async (req, res) => {
  const { query } = req;

  try {
    let user = await User.findOne({ _id: query.user_id });

    let guest = await Guest.create(
      {
        user: user,
        party_name: query.party_name,
        host_id: query.host_id,
        status: false,
      },
      (error, success) => {
        if (error)
          return res.send(500, {
            message: "Failed to send request!!!",
          });
      }
    );
    res.send(guest);
  } catch (error) {
    throw error;
  }
};

GuestController.list = async (req, res) => {
  try {
    let { query } = req;
    let guest = Guest.find({ host_id: query.host_id }, (error, success) => {
      if (error)
        return res.send(500, {
          status: false,
          message: "failed to get the list",
        });
    });
    res.send(guest);
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
