// O setAttribute pode adicionar cor em um texto ou título.

document.getElementById("btn-set").addEventListener("click",function(){
    document.getElementById("title").setAttribute("class","red")
})

// O removeAttribute tira o setAttribute, ou seja, remove o que foi adicionado.

document.getElementById("btn-remove").addEventListener("click",function(){
    document.getElementById("title").removeAttribute("class")
})

// O getAttribute da o valor do set, se você colocar o innerHTML o valor será em html. 

document.getElementById("btn-get").addEventListener("click",function(){
    var rj = document.getElementById("title").getAttribute("class")
    document.getElementById("class").innerHTML = rj
})


/*    Css3
<style> 
    .red {color: red;}
</style>


html
<h1 id="title">Flamengo campeão</h1>

<button id="btn-set">Set</button>
<button id="btn-remove">Remove</button>
<button id="btn-get">Get</button>

<p id="class"></p>

*/
