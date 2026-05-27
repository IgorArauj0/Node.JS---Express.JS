const http = require('http');
const fs = require('fs');


const port = 3001;

const server = http.createServer((req, res) => {

  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const name = requestUrl.searchParams.get('name');
  
   if(!name) {

    fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data);
    return res.end();
  })
  } else {
    
     const nameNewLine = name + '\r\n';

    fs.appendFile('arquivo.txt', nameNewLine, function (err, data){
      res.writeHead(302, { 
        Location: '/',
       })
       return res.end();
    })
  }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});