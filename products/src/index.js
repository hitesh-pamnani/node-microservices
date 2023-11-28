const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Products App!");
});

app.listen(3001, () => {
  console.log("Products App running on port 3001");
});
