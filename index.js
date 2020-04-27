const http = require("http");
const app = require("./app");
const db = require("./Model/index.js");
const port = process.env.PORT || 3010;

let server = http.createServer(app);
// Server Static assets if in production
if (port === "production") {
  // Set a static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
server
  .listen(port, function () {
    console.log("Server has started at port number 3010!");
  })
  .on("error", (error) => {
    console.log("Unable to start app , Error>>>>>>", error);
  });
