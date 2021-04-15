// O getElementsByTagName pega os elementos pelo nome, teg ou id.

var lista = document.getElementsByTagName("ul")[0]
var itens = document.getElementsByTagName("li")

// Para funcionar no console.
    
console.log(
    lista, itens       
)

// children serve para colocar no cosole os elementos uma lista.

var itens = lista.children

//  Serve para adicionar um elemento novo a uma lista, por exemplo.

var novoItem = document.createElement("li")
novoItem.textContent = "Suco de laranja"


lista.insertBefore(novoItem,itens[0])

// Usando  o  replaceChld

var lista2 = document.getElementsByTagName("ul")[1]
var itens2 = lista2.children

var novoItem2 = document.createElement("li")
novoItem2.textContent = "Margarina"


// O reaplaceChild é igual o insertBefore a diferença é que um substitui (reaplaceChild) pelos nomes que estão
// na lista e o outro (insertBefore) adiciona na lista o nome.

lista2.replaceChild(novoItem2,itens2[2])


































/*var lista2 = document.getElementsByClassName("ul")[1]
var itens2 = lista2.children
var novoItem2 = document.createElement("li")
novoItem2.textContent = "Margarina"

lista2.replaceChild(novoItem2,itens2[2])   

console.log(lista2)*/
