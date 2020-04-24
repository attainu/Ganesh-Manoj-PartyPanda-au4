const Feedback = require("./../Model/Feedback");

const FeedbackController = {};

FeedbackController.add = async (req, res) => {
  try {
    let { body } = req;

    await Feedback.create({
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      concern: body.concern,
    })
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        console.log(err);
        res.send("Failed to send");
      });
  } catch (error) {
    throw error;
  }
};

FeedbackController.list = async (req, res) => {
  try {
    let feedback = await Feedback.find({});
    if (!feedback) {
      return res.send("Failed to get list");
    }
    res.send(feedback);
  } catch (error) {
    throw error;
  }
};

module.exports = FeedbackController;
