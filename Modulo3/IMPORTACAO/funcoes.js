function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

function getMaiorNumero(numeros) {

    let maiorNumero = 0;

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
        
    }

    return maiorNumero;
}

// module.exports.gets = gets;

module.exports = { gets, print, getMaiorNumero }