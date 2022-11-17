const router = require("express").Router();
const { db, Page, User } = require("../models/index");
const { main, addPage, wikiPage } = require("../views");

router.get("/", async (req, res) => {
  let allPages = await Page.findAll();
  res.send(main(allPages));
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.author,
        email: req.body.email,
      },
    });
    await page.setAuthor(user);

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
    const author = await page.getAuthor();
    res.send(wikiPage(page, author));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
