import express from "express";
import {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
} from "../controllers/review.controller.js";

import {
  createReviewValidator,
  validationResultMiddleware,
} from "../middleware/validator.js";

const router = express.Router();

router.post(
  "/:bookId",
  createReviewValidator,
  validationResultMiddleware,
  createReview
);

router.get("/:bookId", getAllReviews);

router.get("/review/:reviewId", getReview);

router.put("/review/:reviewId", updateReview);

router.delete("/review/:reviewId", deleteReview);

export default router;
