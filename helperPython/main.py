from http.server import BaseHTTPRequestHandler, HTTPServer

# Define the HTTP request handler class
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    # Handle GET requests
    def do_GET(self):
        self.send_response(200)  # Respond with 200 OK status
        self.send_header('Content-type', 'text/plain')  # Set content type header
        self.end_headers()
        # Write the response body
        self.wfile.write(b'Hello, world! This is a Python server.')

# Define the main function to start the server
def main():
    # Define the server address (localhost) and port
    server_address = ('localhost', 8000)
    # Create an instance of the HTTP server with our custom request handler
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print('Server running at http://{}:{}/'.format(*server_address))
    # Start the server
    httpd.serve_forever()

# Run the main function if this script is executed directly
if __name__ == '__main__':
    main()
