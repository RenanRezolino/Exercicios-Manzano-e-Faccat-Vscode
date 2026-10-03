/* L04F 
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o 
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras 
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve 
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar 
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da 
média. 
*/

let valor;
let soma = 0;
let quantidade = 0;

do {
    valor = Number(prompt("Digite um valor positivo ou negativo para encerrar: "));
    if (valor > -1) {
        soma = soma + valor;
        quantidade++;
    }

} while (valor > -1);

if (quantidade > 0) {

    let media = soma / quantidade;
    alert(`Somatório: ${soma.toFixed(2)}`);
    alert(`Média aritmética: ${media.toFixed(2)}`);
    alert(`Total de valores lidos: ${quantidade}`);

} else {
    alert("Nenhum valor positivo foi informado.");
}