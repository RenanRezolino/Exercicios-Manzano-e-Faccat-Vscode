/* L03E
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 
*/

let expoente = 0;
let potencia = 1;

while (expoente < 16) {
    alert(`3 elevado a ${expoente} = ${potencia}`);
    potencia = potencia * 3;
    expoente++;
}