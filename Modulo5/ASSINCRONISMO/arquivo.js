const fs = require('fs');
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv');

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath);
        const texto = arquivo.toString('utf-8');
        console.log(texto);
    } catch (error) {
        console.log('Error ' + error);
    } finally {
        console.log('Finalizado');
    }
}

buscarArquivo();

// const promessaDoArquivo = fs.promises.readFile(filePath);
// promessaDoArquivo
//     .then(arquivo => arquivo.toString('utf-8'))
//     .then(textoDoArquivo => textoDoArquivo.split('\n').slice(1))
//     .then((linhasDoCabecalho) => linhasDoCabecalho.map((linha) => {
//         const [nome, status] = linha.split(';');
//         return {
//             nome,
//             status: status.trim() === 'true'
//         }
//     }))
//     .then((listaDeTarefas) => {
//         console.log(listaDeTarefas);
//     })
//     .catch((erro) => console.log('Deu erro ' + erro));