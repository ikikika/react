const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const router = require("./router");

// App set up
// // logging framework
app.use(morgan("combined"));
// // middleware
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server set up
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log("Server listening on " + port);
