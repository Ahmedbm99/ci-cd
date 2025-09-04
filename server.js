const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
res.status(200);
});
app.get("/test", (req, res) => {
  res.send("testing");
res.status(200);
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;