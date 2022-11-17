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

app.use("/wiki", wikiRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;
const init = async () => {
  await db.sync({ focus: true });
  // make sure that you have a PORT constant

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
