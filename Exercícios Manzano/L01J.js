/* L01J
Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponível com o usuário, para que seja apresentado o valor em moeda brasileira. 
*/

let cotacaoDolar = Number(prompt("Digite a cotação do dólar: "));
let quantidadeDolares = Number(prompt("Digite a quantidade de dólares: "));
let valorReais = quantidadeDolares * cotacaoDolar;

alert(`Cotação do dólar: R$ ${cotacaoDolar.toFixed(2)}`);
alert(`Quantidade de dólares: US$ ${quantidadeDolares.toFixed(2)}`);
alert(`Valor em reais: R$ ${valorReais.toFixed(2)}`);