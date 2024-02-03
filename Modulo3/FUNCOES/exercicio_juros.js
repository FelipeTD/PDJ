/* Condições Pagamento
    1 - DEBITO
    2 - DINHEIRO OU PIX
    3 - 2X
    4 - ACIMA DE 2X
*/

function valorComDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * (desconto / 100));
}

function valorComJuros(precoEtiqueta, juros) {
    return precoEtiqueta + (precoEtiqueta * (juros / 100));
}

function calcularPrecoFinal(precoEtiqueta, condicaoPagamento) {
    if (condicaoPagamento === 1) {
        return valorComDesconto(precoEtiqueta, 10);
    } else if (condicaoPagamento === 2) {
        return valorComDesconto(precoEtiqueta, 15);
    } else if (condicaoPagamento === 3) {
        return precoEtiqueta;
    } else {
        return valorComJuros(precoEtiqueta, 10);
    }
}

(function () {
    const precoEtiqueta = 100;
    const condicaoPagamento = 4;

    let precoFinal = calcularPrecoFinal(precoEtiqueta, condicaoPagamento);
    console.log('Preço a ser pago: ' + precoFinal.toFixed(2));

})();