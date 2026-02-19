const express = require('express');
const router = express.Router();

const {
  createReview,
  getReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById

} = require('../controllers/review.controller');



router.get("/",getReviews);
router.get("/:id",getReviewById);
router.patch("/:id",updateReviewById);
router.post('/', createReview);
router.delete("/:id",deleteReviewById);


module.exports = router;