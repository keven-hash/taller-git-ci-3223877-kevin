// Función de suma [cite: 49]
function suma(a, b) {
    return a + b;
}

// Función de UI - Paso 3 [cite: 61]
function agregarItem(texto) {
    const lista = document.getElementById('lista');
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = texto;
    lista.appendChild(nuevoLi);
}

// Mostrar en consola [cite: 49]
console.log('App lista');
