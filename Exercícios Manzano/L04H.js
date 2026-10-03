/* L04H
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial. 
*/

let areaTotal = 0;

let continuar;

do {
    let nome = prompt("Digite o nome do cômodo: ");
    let largura = Number(prompt("Digite a largura do cômodo: "));
    let comprimento = Number(prompt("Digite o comprimento do cômodo: "));
    let area = largura * comprimento;
    areaTotal = areaTotal + area;
    alert(`Cômodo: ${nome} Área do cômodo: ${area.toFixed(2)} m`);

    continuar = prompt("Deseja calcular outro cômodo? (SIM/NAO): ");

} while (continuar != "NAO");

alert(`Área total da residência: ${areaTotal.toFixed(2)} m`);