import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Book = sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false},
    author: { type: DataTypes.STRING, allowNull: false},
    year: { type: DataTypes.INTEGER, allowNull: false},
    summary: { type: DataTypes.TEXT, allowNull: true},
},
{ timestamps: true }
)

export default Book;