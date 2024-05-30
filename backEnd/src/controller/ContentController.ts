import db from "../db/index";
import { Request, Response } from "express";
export const addConent = async (id: string, array: string[][]) => {
  try {
    console.log(array);

    for (let i = 0; i < array.length; i++) {
      await db.Content.create({
        pageNumber: i,
        content: JSON.stringify(array[i]),
        BookId: id,
      });
    }
    return "content added successfully for the ";
  } catch (error) {
    throw error;
  }
};
export const getContent = async (req: Request, res: Response) => {
  try {
    const result = await db.Content.findAll({
      limit: 10,
      offset: parseInt(req.params.page),
      where: { BookId: req.params.id },
    });
    res.json(result);
  } catch (error) {
    throw error;
  }
};
