function consumirApi(){
    fetch('http://10.59.17.151:3000/datos')
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
    }) 
    .catch((error) => {
        console.log(error);
      });
}