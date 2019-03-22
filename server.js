const express = require("express");
const helmet = require("helmet");
const dishesRouter = require("./routers/dishes.js");

const server = express();

server.use(helmet());
server.use("/api/dishes", dishesRouter);

module.exports = server;
