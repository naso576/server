const usersController = require("../controllers/users.controller.js");
const router = require("express").Router();

router.post("/createUser", usersController.createUser);

module.exports = router;
