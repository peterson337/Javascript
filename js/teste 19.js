//                              Objetos

/* Um objeto é uma coleção de propriedades, e uma propriedade  é uma associação entre um nome (ou chave) 
e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. */

let pessoa = {
    nome: "jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro","gato"]
}

console.log(
    pessoa
)

/* No console.log da para vc colocar só o nome do objeto, porem só aparecerar ele no concole, a única exeção é
o arrany que precisa colocar o indice (0,1,2,3,4,5 e etc.) para achar o objeto.  */

console.log(
    pessoa.pets
)

// Da para colocar objeto dentro de objeto, como segue no exemplo abaixo:

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
        }, 
        andar: function(km) {
            alert (pessoa.nome+"andou"+km+"km")
        } 
    }
}

// No console.log vc coloca pessoas.carros ou qualquer outro objeto que vc tenha colocado, desse jeito vc 
// consegue acessar outro objeto.

pessoa.andar(20)

console.log(
    pessoa
)

// Esse objeto aparece no alert ou em outras coisas só precisa colocar. o . ponto é para o console acahar o 
// elemento, o + é para juntar  os elementos, O km é colocado no function depois no alert depois colocam um
// nome para ele que é km. 

/*
andar: function(km) {
    alert (pessoa.nome+"andou"+km+"km")
}
*/
