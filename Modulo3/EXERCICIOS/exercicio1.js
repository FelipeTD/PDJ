const nota1 = 3;
const nota2 = 5;
const nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

console.log('Sua media é: ' + media.toFixed(2));

if (media > 7) {
    console.log('Passou de semestre');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Reprovação');
}