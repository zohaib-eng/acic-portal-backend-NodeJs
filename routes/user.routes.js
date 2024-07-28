const { UserController } = require("../controllers");

const express = require("express");
const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/login", UserController.loginUserById);
router.get("/:id", UserController.getUserById);
router.put("/create", UserController.createUser);
router.patch("/update", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
