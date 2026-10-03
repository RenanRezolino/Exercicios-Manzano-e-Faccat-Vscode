/* exercício 12
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra. 
*/

let quantidadeMacas = Number(prompt("Digite a quantidade de maçãs compradas: "));
let custoTotal;

if (quantidadeMacas < 12) {
    custoTotal = quantidadeMacas * 1.30;
} else {
    custoTotal = quantidadeMacas * 1.00;
}

alert(`Quantidade de maçãs: ${quantidadeMacas}`);
alert(`Custo total da compra: R$ ${custoTotal.toFixed(2)}`);