const promesa = new Promise((resolve,reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(() =>{
        number > 3 ? resolve(number) : reject(`El numero ${number} es menor a 3`)
    },1000);
});

function suma(num1,num2){
    return num1+num2;
}

function mul(num1,num2){
    return num1*num2;
}

promesa.then((numeroRandom) =>{
    console.log('numeroRandom',numeroRandom);
    return suma(numeroRandom,9);
})
.then((resultadoSuma) =>{
    console.log('Suma random',resultadoSuma);
    return mul(resultadoSuma, 10);
})
.then((resultadoMult)=>{
    console.log('Multiplicacion ',resultadoMult);
})
.catch((error) =>{
    console.log(error);
});