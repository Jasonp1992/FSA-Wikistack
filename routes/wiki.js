const router = require("express").Router();
const { db, Page, User } = require("../models/index");
const { main, addPage } = require("../views");

router.get("/", async (req, res) => {
  //let allPages = await Page.findAll();
  res.send(main());
});

router.post("/", async (req, res, next) => {
  //res.json(req.body);
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

module.exports = router;
