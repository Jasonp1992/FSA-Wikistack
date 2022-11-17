const router = require("express").Router();
const { db, Page, User } = require("../models/index");
const { main, addPage, wikiPage } = require("../views");

router.get("/", async (req, res) => {
  let allPages = await Page.findAll();
  res.send(main(allPages));
});

router.post("/", async (req, res, next) => {
  //res.json(req.body);
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect(`/wiki/${page.slug}`);
  } catch (err) {
    next(err);
  }
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({ where: { slug: req.params.slug } });
    //const author = await User.findOne({where: })
    res.send(wikiPage(page));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
