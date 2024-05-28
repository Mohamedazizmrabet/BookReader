import express, { Request, Response } from "express";

import { createABook } from "../../controller/BooksController";
const router = express.Router();

router.post("/upload", createABook);

export default router;
