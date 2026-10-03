/* L01K 
Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
com o usuário, para que seja apresentado o valor em moeda americana. 
*/

let cotacaoDolar = Number(prompt("Digite a cotação do dólar: "));
let quantidadeReais = Number(prompt("Digite a quantidade de reais: "));
let valorDolares = quantidadeReais / cotacaoDolar;

alert(`Cotação do dólar: R$ ${cotacaoDolar.toFixed(2)}`);
alert(`Quantidade de reais: R$ ${quantidadeReais.toFixed(2)}`);
alert(`Valor em dólares: US$ ${valorDolares.toFixed(2)}`);