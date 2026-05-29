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
     console.log(answer)
    })
    .catch(err => console.log(err))

}