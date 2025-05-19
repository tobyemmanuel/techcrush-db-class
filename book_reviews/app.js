import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from "./routes/book.route.js";
import reviewRoutes from "./routes/review.route.js";
import typicodeRoutes from "./routes/typicode.route.js";
import { sequelize } from "./config/db.config.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());


app.use("/api/books", bookRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/posts", typicodeRoutes);

sequelize.sync({alter: true})
.then(() => {
    app.listen(PORT, ()=> {
        console.log('Server is running on port: ', PORT);
    })
})
.catch((err) => {
    console.log("Error syncing database: ", err);
})
