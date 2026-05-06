const url = 'http://localhost:3000/tarefas'; 
const tarefas = [];
let tarefaAtual = null;

carregarTarefas();

function carregarTarefas() {
    fetch(url + '/listar')
        .then(response => response.json())
        .then(data => {
            tarefas.length = 0;
            tarefas.push(...data);
            listarCards();
        })
        .catch(() => alert('Problemas com a conexão da API'));
}

function listarCards() {
    const container = document.querySelector('main');
    container.innerHTML = '';

    tarefas.forEach(tarefa => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <h3>${tarefa.nome}</h3>
        <img src="${tarefa.imagem}" alt="${tarefa.nome}">
        <p> Início: ${new Date(tarefa.dataInicio).toLocaleDateString()}</p>
        <p> Fim: ${tarefa.dataFim ? new Date(tarefa.dataFim).toLocaleDateString() : 'Não definida'}</p>
        `;

        card.onclick = () => abrirTarefa(tarefa);
        container.appendChild(card);
    });
}

function abrirTarefa(tarefa) {
    tarefaAtual = tarefa;

    tituloTarefa.innerHTML = tarefa.nome;
    nomeEdit.value = tarefa.nome;

    imgTarefa.src = tarefa.imagem;
    imgEdit.value = tarefa.imagem;

    descricaoEdit.value = tarefa.descricao;

    dataFimEdit.value = tarefa.dataFim
        ? tarefa.dataFim.split('T')[0]
        : '';

    detalhes.classList.remove('oculto');
}


imgEdit.addEventListener("input", () => {
    imgTarefa.src = imgEdit.value;
});


document.querySelector('#formCad').addEventListener('submit', function (e) {
    e.preventDefault();

    const novaTarefa = {
        nome: nome.value,
        descricao: descricao.value,
        imagem: urlImagem.value,
        dataFim: datafinal.value ? new Date(datafinal.value) : null
    };

    fetch(url + '/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaTarefa)
    })
        .then(() => {
            alert("Tarefa adicionada com sucesso!");
            cadastro.classList.add('oculto');
            carregarTarefas();
        })
        .catch(() => alert("Erro ao salvar tarefa"));
});


function salvarEdicao() {
    const tarefaEditada = {
        nome: nomeEdit.value,
        descricao: descricaoEdit.value,
        imagem: imgEdit.value,
        dataFim: dataFimEdit.value ? new Date(dataFimEdit.value) : null
    };

    fetch(url + '/atualizar/' + tarefaAtual.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefaEditada)
    })
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(() => {
            alert("Tarefa atualizada com sucesso!");
            detalhes.classList.add('oculto');
            carregarTarefas();
        })
        .catch(() => alert("Erro ao editar tarefa"));
}


function excluirTarefaAtual() {
    if (!confirm("Deseja excluir a tarefa?")) return;

    fetch(url + '/excluir/' + tarefaAtual.id, {
        method: 'DELETE'
    })
        .then(() => {
            alert("Tarefa excluída com sucesso!");
            detalhes.classList.add("oculto");
            carregarTarefas();
        })
        .catch(() => alert('Erro ao excluir a tarefa'));
}