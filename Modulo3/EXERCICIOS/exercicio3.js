/* Condições Pagamento
    1 - DEBITO
    2 - DINHEIRO OU PIX
    3 - 2X
    4 - ACIMA DE 2X
*/

const precoEtiqueta = 100;
const condicaoPagamento = 4;
let precoFinal = precoEtiqueta;

if (condicaoPagamento === 1) {
    precoFinal = precoEtiqueta * 0.9;
} else if (condicaoPagamento === 2) {
    precoFinal = precoEtiqueta * 0.85;
} else if (condicaoPagamento === 3) {
    precoFinal = precoEtiqueta;
} else {
    precoFinal = precoEtiqueta * 1.1;
}

console.log('Preço a ser pago: ' + precoFinal.toFixed(2));