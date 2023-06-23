const express = require("express");
const {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} = require("../controllers/userController.js");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getSingleUser);
router.get("/", verifyAdmin, getAllUser);

module.exports = router;
