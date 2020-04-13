const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const guestSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
    },
    party_name: {
      type: String,
    },
    host_id: {
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
