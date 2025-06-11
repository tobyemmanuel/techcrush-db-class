import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/book.route.js";
import reviewRoutes from "./routes/review.route.js";
import userRoutes from "./routes/user.route.js";
import typicodeRoutes from "./routes/typicode.route.js";
import { sequelize } from "./config/db.config.js";
import path from "node:path";
import fs from "node:fs";
import { errorResponse } from "./utils/errorHandler.js";
// import { sendSMSToUser } from "./utils/cronHandler.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/books", bookRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", typicodeRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Book Reviews API");
});

app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join("uploads", filename);
  if (!fs.existsSync) {
    return errorResponse(res, 404, "File not found");
  }

  res.download(filePath, (err) => {
    if (err) {
      return errorResponse(res, 500, "Error downloading file");
    }
  });
});

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      // sendSMSToUser("0 0 * * *"); // Schedule to run every day at midnight
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Error syncing database: ", err);
  });
