/* L01D
Efetuar o cálculo da quantidade de litros de combustível gasta  em uma viagem, utilizando um 
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da 
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
quantidade de litros (LITROS_USADOS) utilizada na viagem. 

*/

let tempo = Number(prompt("Digite o tempo gasto na viagem: "));
let velocidade = Number(prompt("Digite a velocidade média: "));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

alert(`Velocidade média: ${velocidade.toFixed(2)} Km/h`);
alert(`Tempo gasto na viagem: ${tempo.toFixed(2)} horas`);
alert(`Distância percorrida: ${distancia.toFixed(2)} Km`);
alert(`Litros utilizados: ${litrosUsados.toFixed(2)} litros`);