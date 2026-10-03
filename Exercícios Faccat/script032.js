/* exercício 32
Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
Até 5 Kg 
Acima de 5 Kg 
Morango 
R$ 2,50 por Kg 
Maçã 
R$ 2,20 por Kg 
R$ 1,80 por Kg 
R$ 1,50 por Kg 
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 
*/

let quantidadeMorangos = Number(prompt("Digite a quantidade de morangos em Kg: "));

let quantidadeMacas = Number(prompt("Digite a quantidade de maçãs em Kg: "));

let precoMorango;

let precoMaca;

if (quantidadeMorangos <= 5) {
    precoMorango = 2.50;
} else {
    precoMorango = 2.20;
}

if (quantidadeMacas <= 5) {
    precoMaca = 1.80;
} else {
    precoMaca = 1.50;
}

let valorMorangos = quantidadeMorangos * precoMorango;

let valorMacas = quantidadeMacas * precoMaca;

let quantidadeTotal = quantidadeMorangos + quantidadeMacas;

let valorTotal = valorMorangos + valorMacas;

let desconto = 0;

if (quantidadeTotal > 8 || valorTotal > 25) {
    desconto = (valorTotal * 10) / 100;
}

let valorPagar = valorTotal - desconto;

alert(`Quantidade de morangos: ${quantidadeMorangos} Kg`);
alert(`Quantidade de maçãs: ${quantidadeMacas} Kg`);
alert(`Valor dos morangos: R$ ${valorMorangos.toFixed(2)}`);
alert(`Valor das maçãs: R$ ${valorMacas.toFixed(2)}`);
alert(`Desconto: R$ ${desconto.toFixed(2)}`);
alert(`Valor a pagar: R$ ${valorPagar.toFixed(2)}`);