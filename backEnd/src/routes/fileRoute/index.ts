import express, { Request, Response } from "express";
const router = express.Router();
import fs from "fs";
import processPDF from "../../../function/readPDF";
router.post("/upload", async (req: Request, res: Response) => {
  try {
    // Check if file exists before processing
    if (!req.file) {
      return res.status(400).send("No file uploaded!");
    }

    console.log("fileName", req.file.buffer);
    const bufferFile = req.file.buffer;
    // You likely want to use req.file.buffer to access the binary data

    let result = null;
    if (bufferFile) {
      result = await processPDF(bufferFile);
      console.log(result?.context);
    }

    // console.log(result);
    res.status(201).json("added");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file!");
  }
});
export default router;
