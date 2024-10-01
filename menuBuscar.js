const prompt = require('prompt-sync')();

function mostrarMenuBuscarEstudante() {
    console.log(`
        --------Opçãode Busca--------
        1. Buscar por Nome
        2. Buscar por Matrícula
        3. Buscar por curso
        4. Voltar
    `);
};

function menuOptionsBuscarEstudante(opcao, estudantes) {
    let resultado = [];
    switch (opcao.trim()) {
        case '1':
            const nome = prompt('Digite o nome do estudante: ').trim();
            resultado = estudantes.filter((estudante) => estudante.nome.toLowerCase().includes(nome.toLowerCase()));
            break;
        case '2':
            const matricula = prompt('Digite a matricula do estudante: ').trim();
            resultado = estudantes.filter((estudante) => estudante.matricula === matricula);
            break;
        case '3':
            const curso = prompt('Digite o curso do estudante: ').trim();
            resultado = estudantes.filter((estudante) => estudante.curso === curso);
            break;
        case '4':
            return;
        default:
            console.log('Opção inválida!');
            mostrarMenuBuscarEstudante();  
    }
    return resultado;
};

module.exports = { mostrarMenuBuscarEstudante, menuOptionsBuscarEstudante };