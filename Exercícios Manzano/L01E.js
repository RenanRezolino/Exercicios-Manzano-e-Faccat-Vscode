/*L01E
Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula  
PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).
*/

let valor = Number(prompt("Digite o valor da prestação: "));
let taxa = Number(prompt("Digite a taxa de juros: "));
let tempo = Number(prompt("Digite o tempo de atraso: "));
let prestacao = valor + (valor * taxa / 100) * tempo;

alert(`Valor da prestação: R$ ${valor.toFixed(2)}`);
alert(`Taxa de juros: ${taxa.toFixed(2)}%`);
alert(`Tempo de atraso: ${tempo}`);
alert(`Valor da prestação em atraso: R$ ${prestacao.toFixed(2)}`);