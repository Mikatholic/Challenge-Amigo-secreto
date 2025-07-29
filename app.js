let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNombre = amigoInput.value.trim(); // Usamos trim() para eliminar espacios en blanco al inicio y al final

    if (amigoNombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(amigoNombre);
    amigoInput.value = ''; // Limpia el campo de texto
    mostrarAmigos(); // Actualiza la lista en el HTML
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista actual

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let resultadoElement = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue algunos nombres.');
        resultadoElement.innerHTML = ''; // Limpia cualquier resultado anterior
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultadoElement.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}