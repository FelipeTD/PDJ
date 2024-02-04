const alunos = ['Filipe', 'Debora', 'Miguel'];

console.log(alunos);
console.log(alunos[0]);

alunos.push('Best');
console.log(alunos[3]);

alunos[4] = 'Teste';
console.log(alunos[4]);

console.log(alunos.pop());
console.log(alunos);

console.log(alunos.shift());
console.log(alunos);

// Notas do aluno
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]

console.log(notas.length);

let somaFor = 0;

for (let x = 0; x < notas.length; x++) {
    somaFor = somaFor + notas[x];
}

console.log((somaFor / notas.length).toFixed(2));

const nome = 'Filipe Tortora Dias';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}