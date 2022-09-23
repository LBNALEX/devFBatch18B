const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url2 = "https://rickandmortyapi.com/api/character/235";

function getData(url){
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            resolve(data);
        }) 
        .catch((error) => {
            reject(error);
          });
    });
}

//   getData(url).then((data)=>{
//     console.log('Data ',data);
//   }).catch((error) =>{
//     console.log('Error ',error);
//   });

//   getData(url2).then((data)=>{
//     console.log('Data ',data);
//   }).catch((error) =>{
//     console.log('Error ',error);
//   });
const promesaPokemon = getData(url);
const promesaRick = getData(url2);

const promesas = [promesaPokemon,promesaRick];

//Llamar las 2 promesas juntas
Promise.all(promesas).then((response)=>{
    //usar destructuring para separar los valores
    const [pokemon,personajeRM] = response;
    console.log("Respuesta completa ",response);
    console.log("Primer array de pokemon ",pokemon);
    console.log("Segundo array de Rick ",personajeRM);
}).catch((error)=>{
    console.log(error);
})