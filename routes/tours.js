const express = require("express");
const {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} = require("../controllers/tourController.js");
const { verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();
// create new tour
router.post("/", verifyAdmin, createTour);
router.put("/:id", verifyAdmin, updateTour);
router.delete("/:id", verifyAdmin, deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);
// get tour
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

module.exports = router;
