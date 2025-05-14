import express from "express";
import {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { createBookValidator, validationResultMiddleware } from "../middleware/validator.js";
import { protectedAction } from "../middleware/protected.js";

const router = express.Router();

router.post("/", createBookValidator, validationResultMiddleware, createBook);

router.get("/", getAllBooks);

router.get("/:id", getBook);

router.put("/:id", updateBook);

router.delete("/:id", protectedAction, deleteBook);

export default router;
