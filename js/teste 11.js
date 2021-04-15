// Para o childnodes funcionar no console.

console.log(
    document.body.childNodes
)

// Para transformar os elementos filhos do childNodes em lista no console (nodelist), para aletar
// a quantidade de elementos no alert dos navegadores.

var lista = document.body.childNodes
alert(lista.length)

// O innerHTML retorna o nome do elemento com os códigos do html, exemplo: <h1>Título</h1>.

alert(lista[5].innerHTML)

// O nodeName retorna o nome do elemento sem os códigos do html.

alert(lista[5].nodeName)

// O nodeType retorna o número 1,2,3 e 8. 1 significa um nó de elemento, o 2 significa nó de atributo, 3 
//significa nó de texte e 8 é um nó de comentário.

alert(lista[5].nodeType)

// O nodeValue retorna "null" para nós de elementos, um valor de atributo para nós de atributo e pode
// retornar conteúdo para nós de texto e nós de comentário.

alert(lista[0].nodeValue)

// Ele pode retornar outro valor, além de null, comentários e etc.
alert(lista[0].childNodes[5].childNodes[4].nodeValue)


// O parentNode retorna o elemento pai.

console.log(
    document.getElementById("bahia").parentNode
)

// Quando mais você coloca o parentNode mais ele irá retornar para  o elemento pai.

console.log(
    document.getElementById("ilheus").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
)


