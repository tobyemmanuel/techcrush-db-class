import Book from "../models/book.model.js";

// Create a new book
export const createBook = async (req, res) => {
  const { title, year, author, summary } = req.body;

  const book = await Book.create({ title, year, author, summary });

  if (!book) {
    return res.status(400).json({
      status: false,
      message: "Could not create the book",
      data: [],
    });
  }

  return res.status(201).json({
    status: true,
    message: "Book created successfully",
    data: book,
  });
};

//get all books
export const getAllBooks = async (req, res) => {
  const books = await Book.findAll();

  if (!books) {
    return res.status(400).json({
      status: false,
      message: "Could not get the books",
      data: [],
    });
  }

  return res.status(200).json({
    status: true,
    message: "Books retrieved successfully",
    data: books,
  });
};

// get a single book
export const getBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(Number(id));
  if (!book) {
    return res.status(400).json({
      status: false,
      message: "Could not get the book",
      data: [],
    });
  }

  return res.status(200).json({
    status: true,
    message: "Book retrieved successfully",
    data: book,
  });
};

// update a book
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(Number(id));

  if (!book) {
    return res.status(400).json({
      status: false,
      message: "Could not get the book",
      data: [],
    });
  }

  await book.update();

  return res.status(200).json({
    status: true,
    message: "Book updated successfully",
    data: book,
  });

  //   const dataBody = req.body;
  //   await Book.update(req.body, {
  //     where: {
  //       id,
  //     },
  //   });
};

// delete a book
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(Number(id));
  await book.destroy();

  return res.status(200).json({
    status: true,
    message: "Book deleted successfully",
    data: [],
  });
};
