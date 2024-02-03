/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustivel nos de o valor 
    gasto em reais para realizar este percurso
*/

class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor (marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    precoPorPercurso(distancia, precoCombustivel) {
        return distancia * this.gastoPorKm * precoCombustivel;
    }
}

(function() {

    const carro = new Carro('Volks', 'Cinza', 1 / 12);
    const carro2 = new Carro('Ferrari', 'Vermelho', 1 / 6);
    const distancia = 20;
    const preco = 5.47;

    console.log(`Preço final do percurso para o carro ${carro.marca}: ${carro.precoPorPercurso(distancia, preco).toFixed(2)}`);
    console.log(`Preço final do percurso para o carro ${carro2.marca}: ${carro2.precoPorPercurso(distancia, preco).toFixed(2)}`);

})()