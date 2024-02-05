const pessoa = {
    genero: 'masculino'
}

const filipe = {
    nome: 'Filipe',
    idade: 29,
    __proto__: pessoa
}

console.log(filipe);
console.log(filipe.genero);

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(this.nome);
}

const tortora = new Pessoa('Tortora', 29);

console.log(tortora);
tortora.falar();

class Pessoa2 {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(this.nome);
    }

}

const dias = new Pessoa2('Dias', 29);
console.log(dias);
dias.falar();

const pessoa3 = {
    idade: 18
}

const filipe2 = {
    nome: 'Filipe',
    idade: 30,
    __proto__: pessoa3
}
console.log(filipe2.idade);

const filipe3 = Object.create(pessoa);
filipe3.nome = 'Filipe';
console.log(filipe3);
console.log(filipe3.genero);

// Explicação new

function Pessoa3(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa3.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}

const prototipo = new Pessoa3('Filipe', 29);

console.log(prototipo);
prototipo.falar();

const prototipo2 = {};

Pessoa3.call(prototipo2, 'nome', 29);

console.log(prototipo2);

String.prototype.toPlang = function () {
    return `P ${this}`;
}

console.log('teste'.toPlang());

const renan = {
    nome: 'Renan'
}

renan.__proto__ = {
    idade: 30
}

console.log(`Meu ${renan.idade}`);