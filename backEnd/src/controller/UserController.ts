import db from "../db/index";
import { Request, Response } from "express";
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await db.Books.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
