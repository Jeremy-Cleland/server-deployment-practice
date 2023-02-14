"use strict";

const logger = (req, res, next) => {
  req.log = "Logger: This is a Middlewar Log!";
  next();
};

module.exports = logger;
