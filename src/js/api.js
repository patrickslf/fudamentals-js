// fetch('https://viacep.com.br/ws/01001000/json/')
//  .than()
// .than()
// .catch()
//########## O javascript irá reconhecer da forma escrita acima ##########

  //#############################################################################


// fetch('')
//     .then(response => {
//         return response.json(); //# Traz o as informações da transação
//     })
//     .then(data => {
//         console.log(data) //# Traz os dados da API
//     })
//     .catch(error => console.error('Erro:', error)) //# Se dar erro, traz o erro

//   //#############################################################################
  
//   function getCEP(cep) {
//     fetch(`https://viacep.com.br/ws/${cep}/json`)

//         // informações da API, exemplo: status, headers
//         .then(res => res.json) 
//         // retorna os dados, o que eu solicitei
//         .then(data => console.log(data))
//         //retotna o erro
//         .catch(error => console.error('Error:', error))
//   }
  
  
//    getCEP('')

 //################################### *API POKEMON* ##########################################

  function pokemonAPI (pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then (res => res.json())
    .then (data => {
        const div = document.getElementById('pokemon-info')
        const {name, sprites, weight} = data;

        div.innerHTML = `
        <h2>${name}</h2>
        <img src="${sprites.front_default}" alt="">
        <p>${weight}</p>
        `
        // const nome = `Nome: ${name}`;
        // const peso = `Peso: ${weight}`;
        // const linkFoto = `link da foto: ${sprites.front_default}`;
        // console.log(nome);
        // console.log(peso);
        // console.log(linkFoto);
    })
    .catch(error => console.error('Error:', error))
  }
  
  pokemonAPI('vulpix')
  

   //################################ *API FAKE STORE* #############################################

  function fakeAPI (){
    fetch ('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
  }
  
  
  
  
  

