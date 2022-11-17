const morgan = require("morgan");
const express = require("express");
const layout = require("./views/layout");

const app = express();

app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
