const fs = require('fs');

fs.rename('arquivo.txt', 'novo-arquivo.txt', function (err) {
    if (err) {
        console.log('Erro ao renomear o arquivo:', err)
        return
    }

    console.log('Arquivo renomeado com sucesso!')
})