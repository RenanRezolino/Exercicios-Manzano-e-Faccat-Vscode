/* L05G
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 
*/

let potencia = 1;

for (let expoente = 0; expoente < 16; expoente++) {

    console.log(`3 elevado a ${expoente} = ${potencia}`);

    potencia = potencia * 3;
}