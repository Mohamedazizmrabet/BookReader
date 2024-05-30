import express, { Request, Response } from "express";

import { createABook, getAllBooks } from "../../controller/BooksController";
import { getContent } from "../../controller/ContentController";
const router = express.Router();

router.post("/upload", createABook);
router.get("/getAllBooks", getAllBooks);
router.get("/content/:id/:page", getContent);
export default router;
