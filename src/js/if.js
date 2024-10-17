// //if simples

// const age = 63

// if(age >= 18 && age <= 60) {
//     return console.log('Você pode beber!')
// } else {
//     return console.error('Você não pode beber!')
// }


// // else if

// const age = 17

// if(age >= 18 && age <= 60) {
//     return console.log('Você pode beber!')
// } else if (age === 17){
//     return console.log('Falta apenas um ano para você beber!')
// } else{
//     return console.error('Você não pode beber!')
// }

// atividade: crie uma condição onde:

// nota 10 = passou por excelencia
// nota 9 a 7 = aprovado
// nota 4 a 6 = recuperação
// nota 3 para baixo = reprovado

const nota = 15

if (nota === 10 ){
    return console.log('Passou por excelencia!')
} else if (nota <= 9 && nota >=7){
    return console.log('Aprovado!')
} else if (nota >= 4 && nota <=6){
    return console.log('Recuperação')
} else if (nota <= 3 && nota >= 0 ){
    return console.log('Reprovado')
} else {
    return console.error('Digite uma nota válida!')
}
