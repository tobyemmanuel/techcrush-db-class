import express from "express";

const router = express.Router();

router.post("/:bookId", (req, res) => {
  // create a review for a book
});

router.get("/:bookId", (req, res) => {
  // get all the reviews for a book
});

router.get("/:bookId/:reviewId", (req, res) => {
  // get a review for a book
});

router.get("/review/:reviewId", (req, res) => {
  // get a review
});

router.put("/review/:reviewId", (req, res) => {
  // edit a review
});

router.delete("/review/:reviewId", (req, res) => {
  // delete a review
});

export default router;