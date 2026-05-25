console.log(process.argv);

const args = process.argv.slice(2)

console.log(args);

const nome = args[1].split('=')[1]
const idade = args[2].split('=')[1]

console.log(`Olá ${nome}, você tem ${idade} anos!`);