const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const guestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    party: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "guests" }
);

const Guest = mongoose.model("Guest", guestSchema);
module.exports = Guest;
