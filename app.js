const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5555, () => {
  console.log("Serving on port 5555");
});
