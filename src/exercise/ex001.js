// Crie uma string com nome completo e me retorne "Olá, nome e ultimo nome"

//const fullName = 'Patrick Santos Luiz Ferreira'
//const arrayName = fullName.split(' ') 
//const username = 'Olá, ' + arrayName [0] + ' ' + arrayName [arrayName.length -1]

//console.log (username)

// Nome completo
const fullName = 'Patrick Santos Luiz Ferreira'
// usando método split para gerar um array separando o nome
const arrayName = fullName.split(' ') 
// Peguei o primeiro nome usando [0]
const firstName = arrayName[0] 
// Peguei o  ultimo nome usando metodo length
const lastName = arrayName[arrayName.length -1]

//Saudação
const hello = "Olá, " + firstName + ' ' + lastName

console.table(arrayName)
console.log(arrayName.length)
console.log(hello)

