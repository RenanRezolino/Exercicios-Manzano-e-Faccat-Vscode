/* exercício 27
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
dos outros 2 lados. 
*/

let ladoA = Number(prompt("Digite o valor do lado A: "));
let ladoB = Number(prompt("Digite o valor do lado B: "));
let ladoC = Number(prompt("Digite o valor do lado C: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    alert("Os valores FORMAM um triângulo!");
} else {
    alert("Os valores NÃO FORMAM um triângulo!");
}