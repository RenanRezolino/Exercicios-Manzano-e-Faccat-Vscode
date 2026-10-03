/* exercício 28
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
*/

let time1 = prompt("Digite o nome do primeiro time: ");
let golsTime1 = Number(prompt("Digite o número de gols do primeiro time: "));
let time2 = prompt("Digite o nome do segundo time: ");
let golsTime2 = Number(prompt("Digite o número de gols do segundo time: "));

if (golsTime1 > golsTime2) {
    alert(`Vencedor: ${time1}`);
} else if (golsTime2 > golsTime1) {
    alert(`Vencedor: ${time2}`);
} else {
    alert("EMPATE");
}