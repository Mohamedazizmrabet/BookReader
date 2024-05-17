from flask import Flask, request, jsonify
from io import StringIO
import fitz  # Using PyMuPDF for efficient text extraction
app = Flask(__name__)

@app.route('/upload-pdf', methods=['POST'])
def upload_and_extract():
    # Check if a file is uploaded
    if 'pdfFile' not in request.files:
        return jsonify({'message': 'No PDF file uploaded!'}), 400

    pdf_file = request.files['pdfFile']

    # Validate file type (optional)
    if not pdf_file.filename.endswith('.pdf'):
        return jsonify({'message': 'Invalid file format. Only PDFs allowed!'}), 400

    # Read the PDF content
    try:
        pdf_content = pdf_file.read()
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return jsonify({'message': 'Error processing uploaded file!'}), 500

    # Extract text using PyMuPDF
    try:
        with fitz.open(StringIO(pdf_content), filetype="pdf") as doc:
            text_content = ""
            for page in doc:
                text_content += page.get_text("text")  # Extract text content
    except Exception as e:
        print(f"Error extracting text: {e}")
        return jsonify({'message': 'Error extracting text from PDF!'}), 500

    # Return the extracted text
    return jsonify({'message': 'Text extracted successfully!', 'text': text_content})

if __name__ == '__main__':
    app.run(debug=True,port=5000)
