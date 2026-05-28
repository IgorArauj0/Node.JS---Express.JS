const fs = require('fs');

if(!fs.existsSync('./minhapasta')) {
    console.log('A pasta não existe, criando...');
}

fs.mkdirSync('./minhapasta');

if(fs.existsSync('./minhapasta')) {
console.log('Pasta existente!')
} else {
    console.log('Erro ao criar a pasta!');
}