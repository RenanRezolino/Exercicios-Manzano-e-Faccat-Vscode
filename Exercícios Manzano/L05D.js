/* L05D
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500. 
*/

let soma = 0;

for (let numero = 1; numero < 501; numero++) {

    if (numero % 2 == 0) {

        soma = soma + numero;
    }
}

alert(`Somatório dos valores pares: ${soma}`);