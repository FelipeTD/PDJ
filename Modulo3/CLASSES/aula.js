const filipe = {
    nome: 'Filipe Tortora',
    idade: 29,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }
};

filipe.altura = 1.80

filipe.descrever();

console.log(filipe.nome);
console.log(filipe.idade);
console.log(filipe.altura);
console.log(filipe);

delete filipe.nome;
console.log(filipe);

filipe.descrever = function () {
    console.log(`Minha idade é ${this.idade}`);
}

filipe.descrever();

console.log(filipe['idade']);

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }
}

const tortora = new Pessoa();
tortora.nome = 'Filipe TD';
tortora.idade = 29;

console.log(tortora);

const fofura = new Pessoa();
fofura.nome = 'FofuraTD';
fofura.idade = 31;

console.log(fofura);

tortora.descrever();
fofura.descrever();

class Pessoa2 {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }
}

const miguel = new Pessoa2('Gudao', 11);
miguel.descrever(); 
console.log(`Ano de nascimento ${miguel.anoNascimento}`);

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}

const fabio = new Pessoa2('Fabio', 30);
const thaylon = new Pessoa2('Thaylon', 30);

compararPessoas(fabio, thaylon);