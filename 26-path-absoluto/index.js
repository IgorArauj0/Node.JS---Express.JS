const path = require('path');

console.log(path.resolve('teste.txt')); // Caminho absoluto do arquivo teste.txt

const midFolder = 'relatorios'
const fileName = 'relatorio1.pdf'

const absolutePath = path.join('/', midFolder, fileName);

console.log(absolutePath)