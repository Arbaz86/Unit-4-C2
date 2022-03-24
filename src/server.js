const express = require("express");
const app = express();
const port = 3200;
const connect = require("./configs/db");

const start = async () => {
  try {
    await connect();
  } catch (error) {
    console.log("error:", error);
  }
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

module.exports = start;
