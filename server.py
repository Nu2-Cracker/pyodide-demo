import http.server
import socketserver

PORT = 8001
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port*** localhost:{}".format(PORT))
    httpd.serve_forever()
