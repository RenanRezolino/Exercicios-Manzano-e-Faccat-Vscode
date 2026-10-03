/* L04A
Apresentar os quadrados dos números inteiros de 15 a 200. 
*/

let numero = 15;

do {
    let quadrado = numero * numero;

    console.log(`Número: ${numero}\nQuadrado: ${quadrado}`);

    numero++;
} while (numero < 201);