"use strict";
const axios = require("axios");

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url2 = "https://rickandmortyapi.com/api/character/235";

function getData(url){
    return new Promise((resolve,reject) =>{
        axios.get(url)
.then((response) =>{
    resolve(response.data);
}).catch((error)=>{
    reject(error);
});
    })
}

getData(url)
.then((data) =>{
    console.log('Data ',data.abilities);
}).catch((error) =>{
    console.log('Error ', error);
})