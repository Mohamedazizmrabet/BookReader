from flask import Flask, request, jsonify
from io import BytesIO, StringIO
import pdfminer.high_level

app = Flask(__name__)

@app.route('/upload-pdf', methods=['POST'])
def upload_and_extract():
    # Get the binary data from the form
    pdf_content = request.form.get('pdfFile')
    if not pdf_content:
        return jsonify({'message': 'No file content in the request'}), 400

    try:
        # Directly treat the content as bytes
        pdf_content_bytes = bytes(pdf_content, 'utf-8', errors='ignore')

        # Convert it to BytesIO
        pdf_io = BytesIO(pdf_content_bytes)

        # Extract text from the PDF
        output = StringIO()
        pdfminer.high_level.extract_text_to_fp(pdf_io, output)
        text_content = output.getvalue()

        return jsonify({'message': 'Text extracted successfully!', 'text': text_content})
    except Exception as e:
        print(f"Error extracting text: {e}")
        return jsonify({'message': 'Error extracting text from PDF!'}), 500

if __name__ == '__main__':
    app.run(debug=True)
