const express = require("express");
const {
  studentController,
  detailsController,
} = require("../app/controller/studentController");

const router = express.Router();

router.get("/details", detailsController);

router.get("/", studentController);

module.exports = router;
