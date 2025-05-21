import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const User = sequelize.define(
  "User",
  {
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.TEXT, allowNull: false },
  },
  { timestamps: true }
);

export default User;
