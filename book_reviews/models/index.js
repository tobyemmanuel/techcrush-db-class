import { sequelize } from "../config/db.config.js";
import Book from "./book.model.js";
import Review from "./review.model.js";
import User from "./user.model.js";

Book.hasMany(Review, {foreignKey: 'bookId', onDelete: 'CASCADE'});
Review.belongsTo(Book, {foreignKey: 'bookId'});

export { sequelize, Book, Review, User };