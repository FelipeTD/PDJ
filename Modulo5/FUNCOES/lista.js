const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

lista.forEach(element => {
    console.log(element);
});

lista.forEach((elemento, posicao, referencia) => {
    console.log(`Elemento: ${elemento}`);
    console.log(`Posicao: ${posicao}`);
    console.log(`Referencia: ${referencia}`);
});

const listaNumerosPares = lista.filter((elemento, posicao, referencia) => {
    return (elemento % 2 === 0)
});

console.log(listaNumerosPares);

// Map

class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

const pessoas = [new Pessoa('Filipe'), new Pessoa('Fofura'), new Pessoa('Debora'), new Pessoa('Gudao'), new Pessoa('Best')];

console.log(pessoas);
const nomes = [];

for (let i = 0; i < pessoas.length; i++) {
    const value = pessoas[i];
    nomes.push(value.name);
}
console.log(nomes);

const mapNomes = pessoas.map((element, i) => {
    return `${i} - ${element.name}`;
});
console.log(mapNomes);

// reduce
const somaDeTodos = lista.reduce((anterior, atual) => {
    return anterior + atual;
}, 0);
console.log(somaDeTodos);

const listaJuntar = [1, 2, 3];

console.log(listaJuntar.join(';'));

const nomesJuntar = [{ nome: 'Filipe' }, { nome: 'Fofura' }, { nome: 'Gudao' } ];

console.log(nomesJuntar.map(value => value.nome).join('; '));

console.log(nomesJuntar
    .map(value => value.nome)
    .filter(e => e.startsWith('F'))
    .join('; '));

const elementosHTML = nomesJuntar
    .filter(e => e.nome.startsWith('F'))
    .map(e => `<li> ${e.nome} </li>`)
    .join('');

console.log(elementosHTML);