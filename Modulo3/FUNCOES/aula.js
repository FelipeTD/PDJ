function sayMyName(name) {
    console.log('Meu nome é: ' + name);
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, juros) {
    const valorJuros = (juros / 100) * valor;
    return valor + valorJuros;
}

function main() {

    sayMyName('Filipe');
    sayMyName('Tortora');
    console.log(quadrado(2));
    console.log(incrementarJuros(50, 10));

}

main();