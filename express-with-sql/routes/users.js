const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.route("/users").get(getAllUsers).post(createNewUser);

router
  .route("/users/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
