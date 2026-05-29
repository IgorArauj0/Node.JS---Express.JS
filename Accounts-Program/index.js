// Modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// módulos internos
const fs = require('fs')

operation()


function operation() {

    inquirer.createPromptModule([
        
        {
        type: 'list',
        name: 'action',
        massege: 'O que você deseja fazer?',
        choices: 
        [
            'Criar Conta',
            'Consultar saldo',
            'Depositar', 
            'Sacar',
            'Sair'
        ]},
]).then((answer)=> {
  const action = answer['action']

  if(action === 'Criar Conta') {
    createAccount()
  }



})
.catch(err => console.log(err))
}

// CREATE AN ACCOUNT
function createAccount() {
    console.log(chalk.bgGreen.black('Parabens por escolher o nosso Banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta:'
        }
    ]).then(answer => {
        const accountName = answer['accountName']

        console.info(accountName)

        if(!fs.existsSync('acounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.backgroundColorNames.black('Esta conta já existe, escolha outro nome!'),
         )

         buildAccount()
         return
        }

        fs.writeFileSync(`accounts/${accountName}.json` , 
            '{"balance": 0}', 
            function(err) {
                console.log(err)
            }),

            console.log(chalk.green('Parabéns sua conta foi criada'))
            operation()
    })
    .catch(err => console.log(err))

}