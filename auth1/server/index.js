const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const router = require("./router");

const mongoose = require("mongoose");

const cors = require("cors");

// DB setup
mongoose.connect("mongodb://localhost:27017/auth1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("connected to db");
});

// App set up
// // logging framework
app.use(morgan("combined"));
app.use(cors());
// // middleware
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server set up
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log("Server listening on " + port);
