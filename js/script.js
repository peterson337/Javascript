/*
window.alert("Re:zero")

// Progamação do console do site.

//window.console.log("Eu sou o console")

//window.document.getElementById("titulo")


//window.console.log(window.document.getElementById("titulo"))


window.console.log(window.document.getElementById("titulo").innerHTML
)


console.log(
    screen.width
)


/* Mostar o tamanho da janela no alert.
alert(
    screen.width
)*/ 

/*console.log(
    window
)*/ 

/* Mostrar o endereço da página

console.log(
location.href
)*/

function voltar(){(
    history.back()

)}

function próximo (){(
 history.forward()
)}

/*console.log(
screen.width    
)*/ 

//alert(Screen.width)

//document.getElementById("largura").innerHTML = screen.width  

/*
document.getElementById("fruta")

console.log(
document.getElementsByClassName("carro")
)
*/ 

/*console.log(
    document.getElementsByClassName("carro"){0 ou 1}
    )*/
    
/*console.log(
    document.getElementsByClassName("carro"){0 ou 1}.innerHTML
    )*/

//console.log( document.getElementsByClassName("div"))

console.log(document.getElementsByClassName("p"))

document.getElementById("fruta")


// Tipos de dados

// String

var nome = "Homem Aranha"

// Idade

var idade = "50.50"


// Boolean

// Array

var frutas = ["Goiaba, maça, banana"]


// Object

var carro = new Object ()
carro.fabricação = "2025"
carro.cor = "azul"

// function

var soma = function (a,b) {return a/b}

alert (soma(90,3)) 


let pessoa = {
    nome: "jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro","gato"],
    carros:{
        camaro:{
            placa:"12345678",
            cor: "verde"
        },
        uno: {
            placa:"9876543",
            cor: "branco"
        }   
    },
        
        andar: function(km) {
            alert(pessoa.nome+"andou"+km+"km")
        }

 }


pessoa.andar(20)
console.log(
    pessoa.carros.uno.placa
)


pessoa.nome = "carlos"

pessoa.pets[0] = "papagaio"