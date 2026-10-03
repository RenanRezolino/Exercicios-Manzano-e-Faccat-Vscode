/* L05C
Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). 
*/

let soma = 0;
for (let contador = 1; contador < 101; contador++) {

    soma = soma + contador;
}

console.log(`Soma dos 100 primeiros números: ${soma}`);