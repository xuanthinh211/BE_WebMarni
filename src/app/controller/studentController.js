const studentController = (req, res) => {
  res.send("Student page");
};

const detailsController = (req, res) => {
  res.send("create user");
};
module.exports = { studentController, detailsController };
