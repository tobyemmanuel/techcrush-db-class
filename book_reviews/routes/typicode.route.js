import express from "express";
import { getPosts, createPost } from "../controllers/typicode.controller.js";

const router = express.Router();

router.post("/", createPost);

router.get("/", getPosts);

export default router;
