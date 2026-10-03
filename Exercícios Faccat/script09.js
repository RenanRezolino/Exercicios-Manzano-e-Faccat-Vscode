/* exercício 09
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é: 
n1 * 2 + n2 * 3 + n3 * 5  
mediafinal
 = -----------------------------------  
10 
*/

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let mediaFinal = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

alert(`Primeira nota: ${nota1.toFixed(2)}`);
alert(`Segunda nota: ${nota2.toFixed(2)}`);
alert(`Terceira nota: ${nota3.toFixed(2)}`);
alert(`Média final: ${mediaFinal.toFixed(2)}`);