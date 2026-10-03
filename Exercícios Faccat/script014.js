/* exercício 14
 Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

let anoAtual = Number(prompt("Digite o ano atual: "));

let anoNascimento = Number(prompt("Digite o ano de nascimento: "));

let idade = anoAtual - anoNascimento;

if (idade > 15) {
    alert("A pessoa PODERÁ VOTAR este ano!");
} else {
    alert("A pessoa NÃO PODERÁ VOTAR este ano!");
}

alert(`Idade: ${idade} anos`);