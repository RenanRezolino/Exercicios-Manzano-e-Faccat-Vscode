/* L03A
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
*/

let numero = Number(prompt("Digite um número: "));
let contador = 1;

while (contador <= 10) {
    let resultado = numero * contador;
    alert(`${numero} x ${contador} = ${resultado}`);
    contador++;
}