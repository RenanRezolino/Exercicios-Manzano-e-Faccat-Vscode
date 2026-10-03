/* exercício 16
Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
*/

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

if (valor1 < valor2) {
    alert(`Ordem crescente: ${valor1} e ${valor2}`);
} else {
    alert(`Ordem crescente: ${valor2} e ${valor1}`);
}