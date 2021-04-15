// Adicionar paragrafo ou imagem.
var p = document.createElement("p")
p.innerHTML = "Olá mundo!"

var img = document.createElement("img")
img.src  = "img/beako (beatrice).png"

// Usar o appendChild para adicionar o paragrafo imagem no site. 
document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)  

// Usar o removeChild para remover appendChild.
document.getElementById("conteudo") .removeChild(p)  

/* 
 O appendChild serve para adicionar o elemento filho no elemento pai. O div é o elemento pai (<div id="conteudo"></div>).
Agora o p e img são elementos filhos que serão inserido no elemento pai. O removeChild serve para remover o appendChild.



*/