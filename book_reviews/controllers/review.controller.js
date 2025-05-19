import Review from "../models/review.model.js";
import Book from "../models/book.model.js";

// Create a new review
export const createReview = async (req, res) => {
  const { rating, comment, reviewer } = req.body;
  const bookId = Number(req.params.bookId);

  const checkBook = await Book.findByPk(bookId);

  if (!checkBook) {
    return res.status(404).json({
      status: false,
      message: "Could not find the book",
      data: [],
    });
  }

  const review = await Review.create({ rating, reviewer, comment, bookId });

  if (!review) {
    return res.status(400).json({
      status: false,
      message: "Could not create the review",
      data: [],
    });
  }

  return res.status(201).json({
    status: true,
    message: "review created successfully",
    data: review,
  });
};

//get all reviews
export const getAllReviews = async (req, res) => {
  const bookId = Number(req.params.bookId);

  const checkBook = await Book.findByPk(bookId);

  const { year, author } = req.query;

  if (!checkBook) {
    return res.status(404).json({
      status: false,
      message: "Could not find the book",
      data: [],
    });
  }

  const where = { bookId };
  if (year) {
    where.year = year;
  }

  if (author) {
    where.author = author;
  }

  const reviews = await Review.findAll({ where: where });

  if (!reviews) {
    return res.status(400).json({
      status: false,
      message: "Could not any reviews",
      data: [],
    });
  }

  return res.status(200).json({
    status: true,
    message: "reviews retrieved successfully",
    data: reviews,
  });
};

// get a single review
export const getReview = async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findByPk(Number(reviewId));
  if (!review) {
    return res.status(404).json({
      status: false,
      message: "Could not get the review",
      data: [],
    });
  }

  return res.status(200).json({
    status: true,
    message: "review retrieved successfully",
    data: review,
  });
};

// update a review
export const updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findByPk(Number(reviewId));

  if (!review) {
    return res.status(400).json({
      status: false,
      message: "Could not get the review",
      data: [],
    });
  }

  await review.update(req.body);

  return res.status(200).json({
    status: true,
    message: "review updated successfully",
    data: review,
  });

  //   const dataBody = req.body;
  //   await review.update(req.body, {
  //     where: {
  //       id,
  //     },
  //   });
};

// delete a review
export const deleteReview = async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findByPk(Number(reviewId));
  await review.destroy();

  return res.status(200).json({
    status: true,
    message: "review deleted successfully",
    data: [],
  });
};
