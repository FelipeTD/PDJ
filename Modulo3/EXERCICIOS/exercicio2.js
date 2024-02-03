const altura = 1.80;
const peso = 60;

const imc = peso / Math.pow(altura, 2);

console.log('IMC: ' + imc.toFixed(2));

if (imc > 40) {
    console.log('Obesidade grave');
} else if (imc <= 40 && imc > 30) {
    console.log('Obeso');
} else if (imc <= 30 && imc >= 25) {
    console.log('Acima do peso');
} else if (imc <= 25 && imc >= 18.5) {
    console.log('Peso normal');
} else {
    console.log('Abaixo do peso');
}