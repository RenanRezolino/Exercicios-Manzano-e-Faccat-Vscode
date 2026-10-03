/* Exercício 05
  Escreva um algoritmo para ler o salário mensal
  atual de um funcionário e o percentual de reajuste.
  Calcular e escrever o valor do novo salário.
*/

let salarioAtual = Number(prompt("Digite o salário mensal atual: "));
let percentualReajuste = Number(prompt("Digite o percentual de reajuste: "));
let valorReajuste = (salarioAtual * percentualReajuste) / 100;
let novoSalario = salarioAtual + valorReajuste;

alert(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);
alert(`Percentual de reajuste: ${percentualReajuste.toFixed(2)}%`);
alert(`Valor do reajuste: R$ ${valorReajuste.toFixed(2)}`);
alert(`Novo salário: R$ ${novoSalario.toFixed(2)}`);