/* exercício 17
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 
*/

let horaInicio = Number(prompt("Digite a hora de início do jogo: "));
let horaFim = Number(prompt("Digite a hora de fim do jogo: "));
let duracao;

if (horaInicio < horaFim) {
    duracao = horaFim - horaInicio;
} else {
    duracao = (24 - horaInicio) + horaFim;
}

alert(`Hora de início: ${horaInicio}h`);
alert(`Hora de fim: ${horaFim}h`);
alert(`Duração do jogo: ${duracao} horas`);

