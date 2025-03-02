// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declaro el arreglo
let amigo = [];
//let numero;

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo){
        alert ('VALOR NULO');
    }
    else{
        amigo.push(nombreAmigo);
//        console.log(amigo);
        inputAmigo.value = "";
        inputAmigo.focus();
    }
// mientras agrego voy mostrando
    mostrarAmigo();
}

function mostrarAmigo(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML ="";
    let i=0;

    while( i < amigo.length ){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
        i++;
    }
}
function sortearAmigo(){
    if( amigo.length < 3 ){
        alert("ingresa almenos 3 amigos");     
    }
    else{
        let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }
}