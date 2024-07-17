const express = require("express");
require('dotenv').config()

const { default: mongoose } = require("mongoose");
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("mongo db is connect ");
  })
  .catch(() => {
    console.log();
  });
const app = express();

app.listen(3000, () => {
  console.log("server is running ");
});
// tanvirislam3912 Blog-app
// 1UUx4w7vNe4xjNE7 Eio1hDBR7Km3khKr
//
