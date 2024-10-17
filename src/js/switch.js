const age = 17 

switch(true) {
    case age >= 18 && age <= 60: 
        console.log('Você pode beber!')
        break
    case age === 17:
        console.log('Calma jovem, falta apenas um ano!')
        break
    default:
        console.log('Você não pode beber!')
}

// atividade: crie uma condição de boletim de nota, onde:

// nota 10 = passou por excelencia
// nota 9 a 7 = aprovado
// nota 4 a 6 = recuperação
// nota 3 para baixo = reprovado

const nota = 10

switch (true) {
    case nota === 10:
        console.log('Aprovado por excelencia!')
        break;
    case nota <= 9 && nota >= 7:
        console.log('Aprovado!')
        break;
    case nota <= 6 && nota >= 4:
        console.log('Recuperação!')
        break;
    case nota <= 3 && nota >= 0:
        console.log('Reprovado!')
        break;
    default:
        console.error('Digite uma nota válida!')
        break;
}