/* L01F
Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da 
variável A. Apresentar os valores trocados 
*/

let valorA = Number(prompt("Digite o valor de A: "));
let valorB = Number(prompt("Digite o valor de B: "));
let auxiliar = valorA;

valorA = valorB;
valorB = auxiliar;

alert(`Valor de A após a troca: ${valorA}`);
alert(`Valor de B após a troca: ${valorB}`);