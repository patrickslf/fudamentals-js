// função estática 
//function salve (){
//     return console.log('Salve, sou uma função estatica!')
// }

// salve()

//###########################################################

// function Saudacao() {
//     return "Olá, mundo!"
// }

// console.log(Saudacao())

//###########################################################

// function Somar() {
//     return 2 + 2
// }
// console.log(Somar())

//###########################################################

// *** função Dinamica ***

// function DynaSomar(a, b){
//     return a + b
// }
// console.log(DynaSomar(10, 200));

// function NumberX(num){
//     if(num % 2 == 0) {
//         return `${num} eu sou par`
//     } else {
//         return num + 'eu sou impar'
//     }
// }
// console.log(NumberX(4))

// function ShortName(fullName){
//     const splitName = fullName.split(' ')
//     // ['Maria', 'Jose', 'dos', 'Santos']
//     const [firstName, ...rest] = splitName
//     // [1, 2, 3, 4] = [1, ...rest] = [1, 2, 3]
//     const lastName = rest[rest.length -1]

//     return console.log(`${firstName} ${lastName}`)

// }
// ShortName ('Jose Augusto Pereira')

// const name = 'Joao Doria bolsa'
// const transform = name.split(' ')

// const [first, ...rest] = transform
// console.table(transform)
// console.log(first)
// console.log(rest)


// function ResponseBool(bool){
//     if(bool === true) {
//         return 'yes'
//     } else {
//         return 'no'
//     }
// }
// console.log(ResponseBool(false))

// //ternary
// function ResponseBool(bool){
//     return bool ? 'yes' : 'no'
// }
// console.log(ResponseBool(true))


// Anonimas

const exampleAnonimo = function() {
    console.log('sou uma função anonima')
}
exampleAnonimo()

//Arrow
const arrowfunction = () => {
    return console.log('Sou uma arrow function')
}
arrowfunction()