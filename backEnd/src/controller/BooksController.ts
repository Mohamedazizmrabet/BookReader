import db from "../db/index";
import { Request, Response } from "express";
import fs from "fs"; // Use the promise-based API
import pdf from "pdf-parse"; // Import pdf-parse
import { doBookExist } from "../../function/DobookExist";
import { remove } from "../../function/removeUmpty";
import { main } from "../../function/cententInAsinglePage";
import { addConent } from "./ContentController";
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await db.Books.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const createABook = async (req: Request, res: Response) => {
  try {
    console.log(req.file?.buffer);
    if (req.file?.buffer) {
      const pdfUploaded = await pdf(req.file?.buffer);

      console.log("uploaded one", pdfUploaded);
    }

    const filePath =
      "C:/Users/Mega-PC/Desktop/Books/Manipulation Dark Psychology to Manipulate and Control People by Arthur Horn [Horn, Arthur] (z-lib.org).pdf";
    fs.readFile(filePath, async (err, data) => {
      // console.log(data);

      const pdfData = await pdf(data); // Parse the PDF data
      console.log("in the fs", pdfData);

      // console.log(pdfData);
      const bookInfo = {
        bookName: pdfData.info.Title,
        author: pdfData.info.Author,
        numberOfPages: pdfData.numpages,
      };
      const doBook = await doBookExist(bookInfo.bookName);
      if (doBook) {
        return res.json(doBook);
      } else {
        const workWith: string[] = pdfData.text.split("\n");
        const lengthWithOutSpace = remove(workWith);
        const NumberOfSpace = workWith.length - lengthWithOutSpace.length;
        //! getting the number of phrase in a single page
        const arrayOfPages = main(
          workWith,
          Math.ceil(workWith.length / pdfData.numpages)
        );

        const bookCreated = await db.Books.create(bookInfo);
        console.log(bookCreated.dataValues.id);
        addConent(bookCreated.dataValues.id, arrayOfPages);
        res.json(bookCreated);
      }
    }); // Read the file as a Buffer
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file!");
  }
};
