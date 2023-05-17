const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
//import middleware:
const checkUserAuth = require("../middlewares/auth");

router.route("/users").get(checkUserAuth, getAllUsers).post(createNewUser);

router
  .route("/users/:id")
  .get(checkUserAuth, getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
