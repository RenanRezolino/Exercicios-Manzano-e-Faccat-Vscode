/* L04J
Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. 
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético 
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve 
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 
*/

let dividendo = Number(prompt("Digite o dividendo: "));
let divisor = Number(prompt("Digite o divisor: "));
let quociente = 0;

if (divisor > 0) {

    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        quociente++;
    }

    alert(`Quociente: ${quociente}`);

} else {
    alert("O divisor deve ser maior que zero.");
}