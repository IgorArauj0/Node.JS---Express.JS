const fs = require('fs');

console.log('inicio')

fs.writeFileSync('archivo.txt', 'Olá')

console.log('fim')