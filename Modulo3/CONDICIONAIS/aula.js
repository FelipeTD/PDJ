

const variavelTrue = true;
const variavelFalse = false;
const condicao = 10 > 5;
const numero = 7;
const isDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('Número inválido');
} else if(isDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

