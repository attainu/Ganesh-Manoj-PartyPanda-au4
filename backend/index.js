const express = require("express");

const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use("/public", express.static("public"));

//listening port

app
  .listen(PORT, function() {
    console.log("Application has started and running on port: ", PORT);
  })
  .on("error", function(error) {
    console.log("Unable to start app. Error >>>>", error);
  });
