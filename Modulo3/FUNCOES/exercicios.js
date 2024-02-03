// Exercicio 1
function sayMyName(nome) {
    return 'Meu nome é ' + nome;
}

// Exercicio 2
function verificaIdade(idade) {
    return idade >= 18 ? 'Sim' : 'Não';
}

// Exercicio 3
function sayNameAndVerificaIdade(idade, name) {
    return sayMyName(name) + ' Sou maior de idade? ' + verificaIdade(idade);
}

(function () {
    const name = 'Filipe';
    const idade = 19;

    console.log(sayMyName(name));
    console.log('Minha idade é : ' + idade + ' Sou maior de idade? ' + verificaIdade(idade));
    console.log(sayNameAndVerificaIdade(idade, name));
})();