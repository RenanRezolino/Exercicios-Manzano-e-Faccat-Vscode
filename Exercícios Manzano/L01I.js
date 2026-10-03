/* L01I
Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo 
segundo.
*/

let valorA = Number(prompt("Digite o valor de A: "));
let valorB = Number(prompt("Digite o valor de B: "));
let diferenca = valorA - valorB;
let resultado = diferenca * diferenca;

alert(`Valor de A: ${valorA}`);
alert(`Valor de B: ${valorB}`);
alert(`Quadrado da diferença: ${resultado}`);