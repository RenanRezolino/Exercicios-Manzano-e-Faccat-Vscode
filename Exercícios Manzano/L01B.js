/*  L01B
Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 
*/

let temperaturaFahrenheit = Number(prompt("Digite a temperatura em Fahrenheit: "));
let temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9);

alert(`Temperatura em Fahrenheit: ${temperaturaFahrenheit.toFixed(2)} °F`);
alert(`Temperatura em Celsius: ${temperaturaCelsius.toFixed(2)} °C`);