const http = require("http");
const app = require("./app");
const db = require("./database");

let server = http.createServer(app);

db.connect()
  .then(() => {
    server
      .listen(3010, function () {
        console.log("Connection is ready");
      })
      .on("error", (error) => {
        console.log("Unable to start app , Error>>>>>>", error);
      });
  })
  .catch((error) => {
    console.log("Unable to connect with database , Error>>>>>>", error);
  });
