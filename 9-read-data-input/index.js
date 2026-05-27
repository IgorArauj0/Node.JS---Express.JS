const readline = require('readline').createInterface  ({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual sua Linguagem de Programação Favorita? ", (language) => {

    console.log(`A minha linguagem de programação favorita é ${language}`)
    readline.close()
})

