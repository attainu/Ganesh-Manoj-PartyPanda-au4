const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const guestSchema = new mongoose.Schema(
  {
    user_id: {
      type: Object,
    },
    party_id: {
      type: Object,
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
