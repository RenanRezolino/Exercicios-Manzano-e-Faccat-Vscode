/* Exercício03
Faça um algoritmo que leia a idade de uma pessoa expressa
em anos, meses e dias e escreva a idade dessa pessoa expressa apenas
em dias. Considerar ano com 365 dias e mês com 30 dias
*/

alert("Program de conversão anos, meses em dias");
let anos = parseInt(prompt("Digite idade: "));
let dias = parseInt(prompt("Digite dias corridos"));
let mes = parseInt(prompt("Digite os meses completos: "));

let idadeEmDias = anos*365+mes*30+dias
alert(`A idade dessa pessoas em dias é ${idadeEmDias}`)