/* exercício 20
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total. 
*/

let salarioFixo = Number(prompt("Digite o salário fixo: "));

let valorVendas = Number(prompt("Digite o valor das vendas efetuadas: "));

let comissao;

if (valorVendas <= 1500) {
    comissao = (valorVendas * 3) / 100;
} else {
    let comissaoInicial = (1500 * 3) / 100;

    let valorExcedente = valorVendas - 1500;

    let comissaoExcedente = (valorExcedente * 5) / 100;

    comissao = comissaoInicial + comissaoExcedente;
}

let salarioTotal = salarioFixo + comissao;

alert(`Salário fixo: R$ ${salarioFixo.toFixed(2)}`);
alert(`Valor das vendas: R$ ${valorVendas.toFixed(2)}`);
alert(`Comissão: R$ ${comissao.toFixed(2)}`);
alert(`Salário total: R$ ${salarioTotal.toFixed(2)}`);