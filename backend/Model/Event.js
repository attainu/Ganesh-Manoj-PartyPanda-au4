const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const eventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    theme: {
      type: String,
    },
    music: {
      type: String,
    },
    location: { type: String },
    exact_location: { type: String },
    date: {
      type: Date,
    },
    start_time: { type: String },
    end_timing: { type: String },
    strength: {
      type: Number,
    },
    charges: {
      type: Number,
    },
    beverages: {
      type: String,
    },
    smoking: {
      type: String,
    },
    parking: {
      type: String,
    },
    stayover: {
      type: String,
    },
    details: {
      type: String,
    },
    image: {
      type: String,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { collection: "events" }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
