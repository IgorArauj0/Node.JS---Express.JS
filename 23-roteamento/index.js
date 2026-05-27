const http = require('http');
const fs = require('fs');


const port = 3001;

const server = http.createServer((req, res) => {

  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const name = requestUrl.searchParams.get('name');
  const fileName = requestUrl.pathname.substring(1);

  if (fileName.includes('.html')) {
    if (fs.existsSync(fileName)) {
      fs.readFile(fileName, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data);
        return res.end();
      })

    } else {

    }
    
  }

});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});