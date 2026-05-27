const fs = require('fs');

console.log('inicio')

fs.writeFile('archivo.css', 'Olá', function(err) { 
 setTimeout(function() {
    console.log('Arquivo criado com sucesso!')
 }, 1000)
});