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
    start_time: { type: Date },
    end_timing: { type: Date },
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
      type: Boolean,
    },
    parking: {
      type: String,
    },
    stayover: {
      type: Boolean,
    },
    details: {
      type: String,
    },
    image: {
      type: String,
    },
    mobile: {
      type: String,
    },
  },
  { collection: "events" }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
