/* L03C
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500. 
*/

let contador = 1;
let soma = 0;

while (contador <= 500) {
    if (contador % 2 == 0) {
        soma = soma + contador;
    }
    contador++;
}

alert(`Somatório dos números pares de 1 até 500: ${soma}`);