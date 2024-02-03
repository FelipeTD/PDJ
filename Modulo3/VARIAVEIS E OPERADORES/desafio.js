const precoCombustivel = 5.79;
const KmPorLitros = 5;
const distancia = 100;

const valor = precoCombustivel * (distancia / KmPorLitros);

console.log('O valor gasto para realizar a viagem é: ' + valor.toFixed(2));