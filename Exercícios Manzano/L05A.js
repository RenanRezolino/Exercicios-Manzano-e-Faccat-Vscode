/* L05A 
Apresentar os quadrados dos números inteiros de 15 a 200. 
*/

let numero;

for (numero = 15; numero < 201; numero++) {

    let quadrado = numero * numero;

    console.log(`Número: ${numero}\nQuadrado: ${quadrado}`);
}