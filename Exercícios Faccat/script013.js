/* exercício 13
Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada. 
*/

let nota1 = Number(prompt("Digite a nota da 1ª avaliação: "));
let nota2 = Number(prompt("Digite a nota da 2ª avaliação: "));
let media = (nota1 + nota2) / 2;

if (media > 5) {
    alert("ALUNO APROVADO!");
} else {
    alert("ALUNO NÃO APROVADO!");
}

alert(`Média final: ${media.toFixed(2)}`);