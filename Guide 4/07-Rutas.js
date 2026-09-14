const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === "/"){
      res.end('Start\n');
  } else if (req.url === "/students") {
      res.end('Carlos, Maria, Juan\n');
  } else {
      res.end('Not found\n')
  }
});

// Define the port to listen on
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});