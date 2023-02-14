"use strict";

const express = require("express");
const logger = require("./middleware/logger.js");
const notFound = require("./handlers/404");
const errorHandler = require("./handlers/500");

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(express.json());

// app.use(logger);

app.get("/", logger, (req, res, next) => {
  res.status(200).send(req.log);
});

app.get("/bad", (req, res, next) => {
  next("We have an error");
});

app.use("*", notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
};

module.exports = { start, app };
