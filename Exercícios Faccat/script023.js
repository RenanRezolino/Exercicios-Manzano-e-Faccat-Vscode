/* exercício 23
Ler um valor e escrever se é positivo, negativo ou zero. 
*/

let valor = Number(prompt("Digite um valor: "));

if (valor > 0) {
    alert("O valor é POSITIVO!");
} else if (valor < 0) {
    alert("O valor é NEGATIVO!");
} else {
    alert("O valor é ZERO!");
}