const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
  },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Page.belongsTo(User, { as: "author" });

Page.addHook("beforeValidate", (page, options) => {
  page.slug = generateSlug(page.title);
});

function generateSlug(title) {
  return title.replace(/\s+/g, "_").replace(/\W/g, "");
}

module.exports = { db, Page, User };
