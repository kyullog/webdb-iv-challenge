const express = require("express");
const helmet = require("helmet");
const dishesRouter = require("./routers/dishes.js");
const recipesRouter = require("./routers/recipes.js");

const server = express();

server.use(helmet());
server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

module.exports = server;
