function calculaIMC(altura, peso) {
    return peso / Math.pow(altura, 2);
}

function verificaClassificacao(imc) {
    if (imc > 40) {
        return 'Obesidade grave';
    } else if (imc <= 40 && imc > 30) {
        return 'Obeso';
    } else if (imc <= 30 && imc >= 25) {
        return 'Acima do peso';
    } else if (imc <= 25 && imc >= 18.5) {
        return 'Peso normal';
    } else {
        return 'Abaixo do peso';
    }
}

(function () {
    const altura = 1.80;
    const peso = 60;

    const imc = calculaIMC(altura, peso);
    console.log('IMC: ' + imc.toFixed(2));

    console.log(verificaClassificacao(imc));
})();