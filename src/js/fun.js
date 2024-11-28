 //const fullName = 'Lucas do Espirito Santo'
// // metodo length
// console.log(fullName.length,'conta caracteres')
// // metodo length
// const fruits =['maça','pessego','uva', 'pera']
// console.table(fruits)
// console.log(fruits.length,  'array')
// console.log(fruits[fruits.length -1])
// //.length sempre trará a partir de 1 e o array a partir de 0

// // ########### *** Método slice *** ################
// const cortaNome = fullName.slice(1, 4) 
// console.log(cortaNome)
// // metodo slice corta a letra/numero com base no que foi solicitado com base no index. Ex: Nesse modelo, está cortando as letras "L" e "S"
// //

//const transformToArray = fullName.split(' ') //Cia um array a partir da sting solicitada no parenteses.
//console.log(transformToArray)
// console.log(transformToArray[transformToArray.length -1]) //Retorna o ultimo nome do array
// const lastName = transformToArray[transformToArray.length -1]

//###################################################################################################

//função que pegue o primeiro nome e de ola
function FirstName (fullName){ 
    if (fullName.length <= 0){
        return console,error('Digite um nome valido')
    }
    const name = fullName.split(' ')[0]
    return `Ola, ${name}! Tudo bem?`
}
console.log(FirstName('Patrick Santos Luiz Ferreira'))
 
//Calculo de IMC
function Calculo(peso, altura){
    return peso / altura ** 2
}
const a = Calculo(67, 1.80);
    switch(true) {
        case a < 18.5:
            console.log('Abaixo do peso normal')
            break
    
        case a >= 18.5 && a <= 24.99:
            console.log('Peso normal')
            break
    
        default: a >= 25 && a <= 29.99
            console.log('Sobre Peso')
        
    } 
console.log(`O seu IMC é ${Calculo(67,1.79).toFixed(2)}`)



    