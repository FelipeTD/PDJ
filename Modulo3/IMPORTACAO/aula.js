const funcoes = require('./funcoes');

funcoes.print('Filipe');

const { gets, print } = require('./funcoes');

console.log(gets());
print('Tortora');

/* 
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada: 5, 50, 10, 98, 23
    Saída: 98
*/

const { getMaiorNumero } = require('./funcoes');
const numeros = [5, 50, 10, 98, 23];
print(getMaiorNumero(numeros));
