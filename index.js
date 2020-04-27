const http = require("http");
const app = require("./app");
const db = require("./Model/index.js");
const port = process.env.PORT || 3010;

let server = http.createServer(app);

server
  .listen(port, function () {
    console.log("Server has started at port number 3010!");
  })
  .on("error", (error) => {
    console.log("Unable to start app , Error>>>>>>", error);
  });
