function falarMeuNome() {
    console.log('Meu nome é Filipe');
}

const referenciaNova = falarMeuNome;

referenciaNova();

function falarNomeCompleto(falarMeuNome) {
    falarMeuNome();
    console.log('Tortora Dias');
    return referenciaNova;
}

falarNomeCompleto(falarMeuNome)();

function nomeDaFuncao() {
    console.log('nomeDaFuncao');
}

const nomeDeOutraFuncao = function() {
    console.log('nomeDeOutraFuncao');
}

nomeDaFuncao();
nomeDeOutraFuncao();

function funcao1() {
    console.log(this);
}

const funcao2 = () => {
    console.log(this);
}

// Arrow function não tem o this
const filipe = {
    nome: 'Filipe',
    funcao1,
    funcao2
}

filipe.funcao1();
filipe.funcao2();

function soma(x) {
    return function (y) {
        return x + y;
    }
}

console.log(soma(10)(20));

const somaParcial = soma(10);

console.log(somaParcial(20));
console.log(somaParcial(30));
console.log(somaParcial(40));

// Invocacao de funcoes

const pessoa = {
    nome: 'Filipe',
    idade: 30
}

function teste() {
    console.log('teste');
}

function gritar(prefixo) {
    console.log(prefixo, this.nome);
}
teste();

gritar.apply(pessoa, ['Ola']);
gritar.call(pessoa, 'Olaa');

// callback

function adicao(x, y) {
    return x + y;
}

function multiplicacao(x, y) {
    return x * y;
}

function calculadora(x, operacao, y) {
    console.log(operacao(x, y));
}

calculadora(10, adicao, 20);
calculadora(10, multiplicacao, 20);

document.getElementById('btn1').addEventListener('click', () => {
    console.log('Clicou');
})