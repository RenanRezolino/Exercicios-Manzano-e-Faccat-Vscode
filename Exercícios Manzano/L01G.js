/* L01G
Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída. 
*/

let valorA = Number(prompt("Digite o valor de A: "));
let valorB = Number(prompt("Digite o valor de B: "));
let valorC = Number(prompt("Digite o valor de C: "));
let valorD = Number(prompt("Digite o valor de D: "));

let somaAB = valorA + valorB;
let multiplicacaoAB = valorA * valorB;

let somaAC = valorA + valorC;
let multiplicacaoAC = valorA * valorC;

let somaAD = valorA + valorD;
let multiplicacaoAD = valorA * valorD;

let somaBC = valorB + valorC;
let multiplicacaoBC = valorB * valorC;

let somaBD = valorB + valorD;
let multiplicacaoBD = valorB * valorD;

let somaCD = valorC + valorD;
let multiplicacaoCD = valorC * valorD;

alert(`A + B = ${somaAB}
A * B = ${multiplicacaoAB}

A + C = ${somaAC}
A * C = ${multiplicacaoAC}

A + D = ${somaAD}
A * D = ${multiplicacaoAD}

B + C = ${somaBC}
B * C = ${multiplicacaoBC}

B + D = ${somaBD}
B * D = ${multiplicacaoBD}

C + D = ${somaCD}
C * D = ${multiplicacaoCD}`);