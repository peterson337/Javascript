// Jeito padrão.

console.log(
    document.getElementById("p1").innerHTML
)

// Outro de jeito de fazer.

var paragrafo = document.getElementById ("p1")
paragrafo.innerHTML = "Novo Conteúdo"

// Mudar a cor, altura e a cor do fundo do site.

paragrafo.style.color = "red"
paragrafo.style.backgroundcolor = "black"
paragrafo.style.height = "400px"

// Editar imagem no javascript.

var  imagem = document.getElementById("imagem")
imagem.src = "img/wallpaper re.zero.jpg"
imagem.alt = ""
imagem.width = "10000"  
