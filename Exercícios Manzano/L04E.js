/* L04E 
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
total do somatório da fatorial de cada valor lido. 
*/

let contador = 1;
let somaFatoriais = 0;

do {
    let numero = Number(prompt(`Digite o ${contador}º valor inteiro: `));
    let fatorial = 1;
    let contadorFatorial = 1;

    do {
        fatorial = fatorial * contadorFatorial;
        contadorFatorial++;
    } while (contadorFatorial <= numero);

    somaFatoriais = somaFatoriais + fatorial;
    contador++;

} while (contador < 16);

console.log(`Somatório dos fatoriais: ${somaFatoriais}`);