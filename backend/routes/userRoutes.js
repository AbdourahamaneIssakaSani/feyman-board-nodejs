const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

router.post("/create", UserController.create);

module.exports = router;
