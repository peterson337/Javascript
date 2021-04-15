// createTextNode serve para criar um texto no java sem precisar do html. 

var titulo = document.querySelector("h1")
var texto = document.createTextNode("Um texto qualquer")

titulo.appendChild(texto)

// O textContent substitui o createTextNode criando um novo texto.

titulo.textContent = "Um novo texto"