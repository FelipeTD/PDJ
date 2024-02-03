/*
    Crie uma classe para representar pessoas
    Para cada pessoa teremos os atributos nome, peso e altura
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
    Instancie uma pessoa chamada José que tenha 70kg de pesso e 1.75 de altura e peça para dizer o valor do seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC() {
        return this.peso / (Math.pow(this.altura, 2));
    }

    verificaIMC() {
        const imc = this.calculaIMC();
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

}

const jose = new Pessoa('José', 70, 1.75);
console.log(`Valor do IMC: ` + jose.calculaIMC().toFixed(2));
console.log(jose.verificaIMC());