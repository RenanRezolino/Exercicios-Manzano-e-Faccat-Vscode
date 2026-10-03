/* L03L
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.
*/

let valor = Number(prompt("Digite um valor positivo ou negativo para encerrar: "));
let maior;
let menor;

if (valor > -1) {

    maior = valor;
    menor = valor;

    while (valor > -1) {

        if (valor > maior) {
            maior = valor;
        }

        if (valor < menor) {
            menor = valor;
        }

        valor = Number(prompt("Digite outro valor positivo ou negativo para encerrar: "));
    }

    alert(`Maior valor: ${maior}`);
    alert(`Menor valor: ${menor}`);

} else {
    alert("Nenhum valor positivo foi informado.");

}