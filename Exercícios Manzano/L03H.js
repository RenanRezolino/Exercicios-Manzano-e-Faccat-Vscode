/* L03H
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é
i) 
= C
9 +
160
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/

let celsius = 10;
while (celsius <= 100) {
    let fahrenheit = (9 * celsius + 160) / 5;
    alert(`${celsius.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F`);
    celsius = celsius + 10;
}

