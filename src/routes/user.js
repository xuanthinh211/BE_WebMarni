const {
  createUserController,
  userController,
  detailsuserController,
} = require("../app/controller/userController");

const express = require("express");

const router = express.Router();

router.get("/details", detailsuserController);

router.get("/", userController);

router.post("/", createUserController);

module.exports = router;
