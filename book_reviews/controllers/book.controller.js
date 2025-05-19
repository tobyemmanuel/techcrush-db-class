import Book from "../models/book.model.js";

// Create a new book
export const createBook = async (req, res) => {
  const { title, year, author, summary } = req.body;
  
  const file = req.file;
  const filePath = file ? file.path : null;
  const fileName = file ? file.filename : null;

  const book = await Book.create({ title, year, author, summary, filePath, fileName });

  if (!book) {
    return res.status(400).json({
      status: false,
      message: "Could not create the book",
      data: null,
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
  const LIMIT = 5;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * LIMIT;
  const books = await Book.findAndCountAll({ limit: LIMIT, offset });
  // const books = await Book.findAll();

  if (books.count === 0) {
    return res.status(400).json({
      status: false,
      message: "Could not get the books",
      data: [],
    });
  }

  return res.status(200).json({
    status: true,
    message: "Books retrieved successfully",
    data: {
      books: books.rows,
      total: books.count,
      pages: Math.ceil(books.count / LIMIT),
      page,
    },
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

  await book.update(req.body);

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
