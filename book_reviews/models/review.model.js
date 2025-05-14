import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Review = sequelize.define(
  "Review",
  {
    rating: { type: DataTypes.INTEGER, allowNull: false },
    reviewer: { type: DataTypes.STRING, allowNull: false },
    comment: { type: DataTypes.TEXT, allowNull: false },
    bookId: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: true }
);

export default Review;
