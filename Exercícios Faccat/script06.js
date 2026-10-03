/* Exercício 06
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor. 
*/

let custoFabrica = Number(prompt("Digite o custo de fábrica do carro: "));
let percentualDistribuidor = 28;
let percentualImpostos = 45;
let valorDistribuidor = (custoFabrica * percentualDistribuidor) / 100;
let valorImpostos = (custoFabrica * percentualImpostos) / 100;
let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

alert(`Custo de fábrica: R$ ${custoFabrica.toFixed(2)}`);
alert(`Valor do distribuidor: R$ ${valorDistribuidor.toFixed(2)}`);
alert(`Valor dos impostos: R$ ${valorImpostos.toFixed(2)}`);
alert(`Custo final ao consumidor: R$ ${custoFinal.toFixed(2)}`);