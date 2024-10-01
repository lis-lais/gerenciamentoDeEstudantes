const prompt = require('prompt-sync')();
const { mostrarMenuBuscarEstudante, menoOptionBuscarEstudante, menuOptionsBuscarEstudante } = require('./menuBuscar.js');

let estudantes = [];

function novoEstudante(callbacks) {
    const nome = prompt('Nome: ');
    const matricula = prompt('Matricula: ');
    const curso = prompt('Curso: ');
    const ano = prompt('Ano: ');

    const estudante = {
        id: Date.now(),
        nome: nome.trim(),
        matricula: matricula.trim(),
        curso: curso.trim(),
        ano: ano.trim(),
    };

    callbacks(estudante);
};

function adicionarEstudante() {
    novoEstudante((estudante) => {
        let existe = false;
        for (let i = 0; i < estudante.length; i++) {
            if (estudantes[i].matricula === estudante.matricula) {
                existe = true;
                break;
            }
        }
        if (existe) {
            console.log('Estudante já cadastrado!');
        } else {
            estudantes.push(estudante);
            console.log('Estudante adicionado com sucesso!');
        }  
    });
};

function listarEstudantes() {
    if (estudantes.length === 0) {
        console.log('Nenhum estudante cadastrado!');
        return;
    }

    console.log('Estudantes Cadastrados:');
    console.log(estudantes);
};

function atualizarEstudante() { 
    listarEstudantes();

    const id = prompt('Insira o id do estudante que deseja atualizar: ');
    let index = -1;
    for (let i = 0; i < estudantes.length; i++) {
        if (estudantes[i].id.toString() === id.trim()) {
            index = i;
            break;
        }
    }

    const estudante = estudantes[index];
    if (index === -1) {
        console.log('Estudante não escontrado.');
        return;
    }

    const novoNome = prompt(`Nome (atual: ${estudante.nome})`);
    const novaMatricula = prompt(`Matricula (atual: ${estudante.matricula})`);
    const novoCurso = prompt(`Curso (atual: ${estudante.curso})`);
    const novoAno = prompt(`Ano (atual: ${estudante.ano})`);

    estudantes[index] = {
        id: estudante.id,
        nome: novoNome.trim() || estudante.nome,
        matricula: novaMatricula.trim() || estudante.matricula,
        curso: novoCurso.trim() || estudante.curso,
        ano: parseInt(novoAno. trim()) || estudante.ano,
    };

    console.log('Estudante atualizado com sucesso!');

};

function excluirEstudante() {
    listarEstudantes();

    const id = prompt('Insira o id do estudante que deseja excluir: ');
    let index = -1;
    for (let i = 0; i < estudantes.length; i++) {
        if (estudantes[i].id.toString() === id.trim()) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log('Estudante não encontrado.');
        return;
    }

    estudantes.splice(index, 1);
    console.log('Estudante excluído com sucesso!');
};

function buscarEstudante() {
    listarEstudantes();
    mostrarMenuBuscarEstudante();

    const opcao = prompt('Digite a opção desejada: ').trim();
    const resultados = menuOptionsBuscarEstudante(opcao, estudantes);

    console.log(' Estudantes encontrados: ');
    if (resultados.length > 0) {
        resultados.forEach((estudante, index) => {
            console.log(`${index + 1}. Nome:  ${estudante.nome} - Matrícula: ${estudante.matricula} - Curso: ${estudante.curso} - Ano: ${estudante.ano}`);
        });
    } else {
        console.log('Nenhum estudante encontrado.');
    }
}

module.exports = { 
    adicionarEstudante, listarEstudantes, atualizarEstudante, excluirEstudante, buscarEstudante 
};