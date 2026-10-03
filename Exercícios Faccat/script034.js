/* exercício 34
Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
a pagar (total a pagar = total - desconto), sabendo-se que: - Se quantidade  <= 5  o desconto será de 2% - Se quantidade  > 5  e
  quantidade  <=10  o desconto será de 3% - Se quantidade  >  10 o desconto será de 5%
*/

let nomeProduto = prompt("Digite o nome do produto: ");
let quantidade = Number(prompt("Digite a quantidade adquirida: "));
let precoUnitario = Number(prompt("Digite o preço unitário: "));
let total = quantidade * precoUnitario;
let percentualDesconto;

if (quantidade <= 5) {
    percentualDesconto = 2;
} else if (quantidade <= 10) {
    percentualDesconto = 3;
} else {
    percentualDesconto = 5;
}

let desconto = (total * percentualDesconto) / 100;
let totalPagar = total - desconto;

alert(`Produto: ${nomeProduto}`);
alert(`Quantidade: ${quantidade}`);
alert(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
alert(`Total: R$ ${total.toFixed(2)}`);
alert(`Desconto: R$ ${desconto.toFixed(2)}`);
alert(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);