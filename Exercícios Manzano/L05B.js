/*L05B
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 
*/

let numero = Number(prompt("Digite um número: "));
let resultado;

for (let contador = 1; contador < 11; contador++) {

    resultado = numero * contador;

    console.log(`${numero} x ${contador} = ${resultado}`);
}