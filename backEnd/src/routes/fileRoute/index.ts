import express, { Request, Response } from "express";
import fs from "fs"; // Use the promise-based API
import pdf from "pdf-parse"; // Import pdf-parse

const router = express.Router();

router.post("/upload", async (req: Request, res: Response) => {
  try {
    const filePath =
      "C:/Users/Mega-PC/Desktop/Books/Manipulation Dark Psychology to Manipulate and Control People by Arthur Horn [Horn, Arthur] (z-lib.org).pdf";
    fs.readFile(filePath, async (err, data) => {
      const pdfData = await pdf(data); // Parse the PDF data
      console.log(pdfData);

      const workWith = pdfData.text.split("\n");
      const result = JSON.stringify(workWith);

      console.log(result);
      res.json(result);
    }); // Read the file as a Buffer
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file!");
  }
});

export default router;
