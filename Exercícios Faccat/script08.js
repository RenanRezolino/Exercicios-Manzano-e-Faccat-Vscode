/* Exercício 08
 Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius (baseado na fórmula abaixo): 
C  ---------- 
5  
F - 32  
= -----------  
9  
Observação: Para testar se a sua resposta está correta saiba que  100oC  =  212F
*/
let temperaturaFahrenheit = Number(prompt("Digite a temperatura em Fahrenheit: "));
let temperaturaCelsius = ((temperaturaFahrenheit - 32) * 5) / 9;

alert(`Temperatura em Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}°F`);
alert(`Temperatura em Celsius: ${temperaturaCelsius.toFixed(2)}°C`);