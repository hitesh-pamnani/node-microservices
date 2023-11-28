const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Orders App!");
});

app.listen(3002, () => {
  console.log("Orders App running on port 3002");
});
