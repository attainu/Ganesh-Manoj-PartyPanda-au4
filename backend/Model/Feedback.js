const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    concern: {
      type: String,
    },
  },
  { collection: "feedbacks" }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
