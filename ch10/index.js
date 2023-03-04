// creating server
const http = require("http");
const fs = require("fs")
const PORT = process.env.PORT || 8080;
const HOST = "localhost";
// created server inctense
const server = http.createServer((req, res) => {
  console.log(req.url); // request from user
  /*
  // old method
  res.statusCode = 202;
  res.statusMessage = "Good"
  res.setHeader('Content-Type','text/plain'); // set header (content type)
  */
  res.writeHead(200, "Ok", { "Content-Type": "text/HTML" });
  // url roting with 404 erorr
  if (req.url === "/") {
    fs.readFile('./public/index.html',(error, data)=> {
      if (error) {
        throw error
      } else {
        res.end(data)
      }
    })
    // res.end("<h1>Home</h1>"); // sending response simple string
  } else if (req.url === "/about") {
    fs.readFile('./public/about.html',(error, data)=> {
      if (error) {
        throw error
      } else {
        res.end(data)
      }
    })
    // res.end("<h1>about</h1>"); // sending response simple string
  } else if (req.url === "/contact") {
    res.end("<h1>contact</h1>"); // sending response simple string
  } else {
    res.end("<h1>404</h1>"); // sending response simple string
  }
});
// created port for server to listen on 8080
server.listen(PORT, HOST, () => {
  console.log(
    `server running on port number ${PORT} \nclick on this lin http://${HOST}:${PORT}/`
  );
});
