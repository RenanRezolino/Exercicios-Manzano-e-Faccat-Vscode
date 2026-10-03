/* L05K
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é
= C
9 +
160
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 
*/
for (let celsius = 10; celsius <= 100; celsius = celsius + 10) {

    let fahrenheit = (celsius * 9 + 160) / 5;

    alert(`Celsius: ${celsius} °C\nFahrenheit: ${fahrenheit} °F`);
}