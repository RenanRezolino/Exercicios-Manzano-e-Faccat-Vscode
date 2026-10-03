/* exercício 21
 Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
*/

let numeroConta = Number(prompt("Digite o número da conta: "));

let saldo = Number(prompt("Digite o saldo: "));

let debito = Number(prompt("Digite o valor do débito: "));

let credito = Number(prompt("Digite o valor do crédito: "));

let saldoAtual = saldo - debito + credito;

if (saldoAtual > -1) {
    alert("Saldo Positivo");
} else {
    alert("Saldo Negativo");
}

alert(`Número da conta: ${numeroConta}`);

alert(`Saldo atual: R$ ${saldoAtual.toFixed(2)}`);