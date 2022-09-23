const XMLHttpRequest =  require("xmlhttprequest").XMLHttpRequest;

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const xhttp = new XMLHttpRequest();
xhttp.open("GET",url,true);
xhttp.onreadystatechange = () =>{
    if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
            console.log(xhttp.responseText);
        }
        else{
            console.log('Algo salió mal');
        }
    }
}
xhttp.send();