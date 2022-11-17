const router = require("express").Router();
const { db, Page, User } = require("../models/index");
const { userList, userPages } = require("../views");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const pages = await Page.findAll({ where: { authorId: req.params.id } });
    const user = await User.findByPk(req.params.id);
    res.send(userPages(user, pages));
  } catch (err) {
    next(err);
  }
});
module.exports = router;
