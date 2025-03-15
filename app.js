// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    inputAmigo.value = "";
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡Tu amigo secreto es: ${amigoSorteado}!`;
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    amigos = [];  // Limpiar el array de amigos
    document.getElementById("listaAmigos").innerHTML = '';  // Limpiar la lista de la pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerText = "";
    resultado.style.display = "none";
    console.log("Lista de amigos limpiada");
}

