const prompt = require('prompt-sync')();
const { adicionarEstudante, listarEstudantes, atualizarEstudante, excluirEstudante, buscarEstudante } = require('./cadastrarEstudante.js');

function mostrarMenu() {
    console.log(`
        --------Menu--------
        1. Adicionar Estudante
        2. Listar Estudantes
        3. Atualizar Estudante
        4. Excluir Estudante
        5. Buscar Estudante
        6. Sair
    `);
};

function menuOptions(opcao) {
    switch (opcao.trim()) {
        case '1':
            adicionarEstudante();
            break;
        case '2':
            listarEstudantes();
            break;
        case '3':
            atualizarEstudante();
            break;
        case '4':
            excluirEstudante();
            break;
        case '5':
            buscarEstudante();
            break;
        case '6':
            console.log('Saindo...');
            process.exit();
        default:
            console.log('Opção inválida!');
            mostrarMenu();
    }
};

function menuLoop() {
    while (true) {
        mostrarMenu();
        const opcao = prompt('Digite a opção desejada: ').trim();
        menuOptions(opcao);
    }
};

module.exports = {mostrarMenu, menuOptions, menuLoop};