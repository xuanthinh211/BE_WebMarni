const userRouter = require("./user.js");
const studentRouter = require("./student.js");
const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/user", userRouter);

  app.use("/student", studentRouter);

  app.use("/news", newsRouter);

  app.use("/", siteRouter);
}

module.exports = route;
