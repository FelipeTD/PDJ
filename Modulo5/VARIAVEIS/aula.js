var var1 = 10;
var var2 = 'Teste';

// Resultado 10Teste
console.log(var1 + var2);

var var3 = 10;
var var4 = '20';

// Resultado 1020
console.log(var3 + var4);

// Resultado -10
console.log(var3 - var4);

var var5 = 10;
var var6 = 'Texto';

// NaN
console.log(var5 - var6);

function teste() {
    console.log('Teste');
}

teste();
// teste2() da erro porque a função ainda não foi declarada
// teste2();
var teste2 = function teste2() {
    console.log('Teste 2');
}

// Em if você consegue pegar o valor de var7
if (true) {
    var var7 = 10;
}
console.log(var7);

// Em funções você não consegue
function teste3() {
    var var8 = 10;
}
teste3();
// console.log(var8);

// Utilizando let ele fica limitado ao escopo {}
if (true) {
    let var9 = 10;
}
// console.log(var9);

// variaveis const não podem ser modificadas
const var10 = 10;
// var10 = 11;

// Convenções de variáveis
// Tudo maiusculo
const TESTE = 10;
// jQuery
var $teste = 10;
// variável normal
var teste = 10;
// variável composta
var testeJava = 10;
// variável não deve ser alterada
var _teste = 10;