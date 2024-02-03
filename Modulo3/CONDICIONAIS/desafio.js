const precoEtanol = 3.84;
const precoGasolina = 5.79;
const KmPorLitros = 5;
const distancia = 100;
const tipoCombustivel = 'agua';

let valor = 0;
let combustivelValido = true;

if (tipoCombustivel === 'etanol') {
    valor = precoEtanol * (distancia / KmPorLitros);
} else if (tipoCombustivel === 'gasolina') {
    valor = precoGasolina * (distancia / KmPorLitros);
} else {
    combustivelValido = false;
}

if (combustivelValido) {
    console.log('O valor gasto para realizar a viagem é: ' + valor.toFixed(2));
} else {
    console.log('Tipo de combustivel inválido');
}