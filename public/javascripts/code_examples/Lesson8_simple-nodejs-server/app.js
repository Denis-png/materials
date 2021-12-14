const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

//NON-BLOCKING
/* const server = http.createServer((req, res) => {
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World');
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile("index.html", (err, data) => {
    console.log(data);
    res.write(data);
    res.end();
  });
  console.log("rendered first");
}); */

//BLOCKING CODE EXAMPLE
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const data = fs.readFileSync("index.html");
  console.log(data);
  res.write(data);
  console.log("rendered first");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
