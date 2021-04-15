// Criar elemento (tag, exemplo: Div, p e br) no console.

console.log(
    document.createElement("div")
)

// Colacar as tags "imagem" no console.

var imagem = document.createElement("img")
imagem.src = "img/wallpaper re.zero.jpg"

console.log(
    imagem
)

// Colocar paragrafo no console.

var paragrafo = document.createElement ("p")
paragrafo.innerHTML = "Olá mundo!"

console.log(
     paragrafo
)

         /*

No "console.log" da para colocar o paragrafo e imagem só que precia da ,.

         */

console.log(
imagem, paragrafo
         )        