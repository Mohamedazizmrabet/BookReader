import { PDFDocument } from "pdf-lib";

async function processPDF(pdfBytes: any): Promise<PDFDocument | undefined> {
  try {
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Extract text content or perform other desired operations here
    // const textContent = await pdfDoc.getTextContent();
    return pdfDoc;
  } catch (error) {
    console.error("Error processing PDF:", error);
    // Handle errors gracefully (e.g., send an error response to the client)
    return undefined;
  }
}
export default processPDF;
