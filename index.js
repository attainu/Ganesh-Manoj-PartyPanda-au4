const http = require("http");
const app = require("./app");
const db = require("./Model/index.js");

let server = http.createServer(app);
server
  .listen(3010, function () {
    console.log("Server has started at port number 3010!");
  })
  .on("error", (error) => {
    console.log("Unable to start app , Error>>>>>>", error);
  });
