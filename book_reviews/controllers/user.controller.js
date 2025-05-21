import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Create a new user
export const createUser = async (req, res) => {
  const { email, password, name } = req.body;

  const checkEmail = await User.findOne({ where: { email } });

  if (checkEmail) {
    return res.status(404).json({
      status: false,
      message: "Email has been used",
      data: [],
    });
  }

  const hashed_password = await bcrypt.hashSync(password, 10);

  const user = await User.create({ email, name, password: hashed_password });

  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Could not create the user",
      data: [],
    });
  }

  return res.status(201).json({
    status: true,
    message: "user created successfully",
    data: user,
  });
};

// login a user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({
      status: false,
      message: "Invalid email or password",
      data: [],
    });
  }

  const comparePassword = await bcrypt.compareSync(password, user.password);

  if (!comparePassword) {
    return res.status(400).json({
      status: false,
      message: "Invalid email or password",
      data: [],
    });
  }

  let payload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };
  let token = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  payload.token = token;

  return res.status(201).json({
    status: true,
    message: "user login successfully",
    data: payload,
  });
};

// get user profile
export const userProfile = async (req, res) => {
  return res.status(200).json({
    status: true,
    message: "user profile retrieved successfully",
    data: req.user,
  });
};

//get all users
export const getAllUsers = async (req, res) => {
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

  const users = await User.findAll({ where: where });

  if (!users) {
    return res.status(400).json({
      status: false,
      message: "Could not any users",
      data: [],
    });
  }

  return res.status(200).json({
    status: true,
    message: "users retrieved successfully",
    data: users,
  });
};

// get a single user
export const getUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findByPk(Number(userId));
  if (!user) {
    return res.status(404).json({
      status: false,
      message: "Could not get the user",
      data: [],
    });
  }

  return res.status(200).json({
    status: true,
    message: "user retrieved successfully",
    data: user,
  });
};

// update a user
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findByPk(Number(userId));

  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Could not get the user",
      data: [],
    });
  }

  await user.update(req.body);

  return res.status(200).json({
    status: true,
    message: "user updated successfully",
    data: user,
  });

  //   const dataBody = req.body;
  //   await user.update(req.body, {
  //     where: {
  //       id,
  //     },
  //   });
};

// delete a user
export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findByPk(Number(userId));
  await user.destroy();

  return res.status(200).json({
    status: true,
    message: "user deleted successfully",
    data: [],
  });
};
