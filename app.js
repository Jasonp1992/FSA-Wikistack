const morgan = require("morgan");
const express = require("express");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const userRouter = require("./routes/user");
const wikiRouter = require("./routes/wiki");

const app = express();

app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 1337;
const init = async () => {
  await db.sync();
  // make sure that you have a PORT constant

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
