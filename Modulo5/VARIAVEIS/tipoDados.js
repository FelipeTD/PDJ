/*
    boolean
    null
    undefined
    number
    string
    symbol
*/

// object

let x = 10;
x = 'Texto';

// Primitivo
true, false;
// Objeto
new Boolean(true);

// comparação
// Não considera tipo
console.log(10 == '10');
// Considerando tipo
console.log(10 === '10');

// Converter para booleano
console.log(!'');

// Vazio convertido para false
const nome = ' ';
if (nome) {
    console.log('Preenchido');
}

// Conversão boleana
console.log(!!'as');

// Diferença null e undefined
const a = null;
let y;

console.log(a);
console.log(y);

let objeto = {
    nome: null
}

console.log(objeto.nome);
console.log(objeto.sobrenome);

objeto = {
    nome: undefined
}

console.log(JSON.stringify(objeto));

// Números
// +Infinity -Infinity NaN
// Double precision 64-bit binary format IEEE 754

// Strings
console.log('teste');
console.log("teste");
console.log(`teste`);

// symbol
const s = Symbol('10');
const t = Symbol('10');
console.log(s);
console.log(s === t);

// objetos
const z = {
    nome: 'Filipe',
    idade: 29,
    escrever: function() {
        console.log(this.nome);
    }
}

z.sobrenome = 'Tortora';
z['sobrenome'] = 'Dias';

console.log(typeof z);
console.log(z);

z.falar = function() {
    console.log('Estou falando');
}

z.falar();
z.escrever();

const w = z.falar;
w();