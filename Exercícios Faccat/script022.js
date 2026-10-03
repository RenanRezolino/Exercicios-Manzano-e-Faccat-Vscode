/* exercício 22
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
compra'. 
*/

let quantidadeEstoque = Number(prompt("Digite a quantidade atual em estoque: "));
let quantidadeMaxima = Number(prompt("Digite a quantidade máxima em estoque: "));
let quantidadeMinima = Number(prompt("Digite a quantidade mínima em estoque: "));
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

if (quantidadeEstoque >= quantidadeMedia) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}

alert(`Quantidade atual em estoque: ${quantidadeEstoque}`);
alert(`Quantidade média: ${quantidadeMedia.toFixed(2)}`);