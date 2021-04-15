                                    // Tipos de dados

                                         // String

var nome = "Homem Aranha"

alert(nome)

// ou

alert(typeof(nome))

/*

O string  é qualquer valor, ou seja, qualquer teg ou elemento.

*/

                                           // Idade 

var idade = "50.50"

// ou

var idade = "50"

alert(typeof(idade))

// ou

alert(nome)


/*

a idade mostra a idade da pessoa.
*/


                                           // Boolean

var bicho = true

// ou 

var bicho = false

alert (typeof(bicho))

//  ou

alert(nome)

/*

O boolean mostra true ou false, verdadeiro ou falso.

*/


                                        // arrany

var frutas = ["Goiaba, maça, banana"]

alert (typeof(frutas))

//  ou

alert(nome)

/*


O arrany faz uma lista string (teg ou elemento).

OBS: object. O arrany retorna object em vez de arrany, pois é um obejeto especial.

*/

// Obejct

var carro = new Object ()
carro.fabricação = "2025"
carro.cor = "azul"

alert (typeof(carro))

//  ou

alert(nome)

//  ou

alert (carro.fabricação)

/*


O object retorna object não é igual ao arrany. Pode retornar o alert (typeof(carro)) igual os outos ou outro 
valor, como alert (carro.fabricação) será retornado o valor que é 2025.



*/

                                        // function

var soma = function (a,b) {return a+b}

alert (soma(5,9)) // soma dos números

// ou

alert (typeof(soma(5,9)) // number
)

// ou 

alert (typeof(soma)) // function

/*


O function  retorna soma de conta, o function, number e etc.

OBS: Para somar, dividr, muitiplicar e subtrair, colocar o sinal de +,-,* e /. Exemplo: {return a+b} 
{return a/b} {return a-b} {return a*b}.

*/
