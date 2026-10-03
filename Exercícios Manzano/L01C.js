/* L01C
Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: 
Altura Raio Volume * * 2 π 
*/

let raio = Number(prompt("Digite o raio da lata: "));
let altura = Number(prompt("Digite a altura da lata: "));
let volume = Math.PI * raio * raio * altura;

alert(`Raio da lata: ${raio.toFixed(2)}`);
alert(`Altura da lata: ${altura.toFixed(2)}`);
alert(`Volume da lata: ${volume.toFixed(2)}`);