// Função para salvar o atendimento
function salvarAtendimento() {
    // Pega os valores dos campos do formulário
    const cliente = document.getElementById('cliente').value;
    const contrato = document.getElementById('contrato').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const tipo = document.getElementById('tipo').value;
    const status = document.getElementById('status').value;
    const obs = document.getElementById('obs').value;

    // Verifica se os campos essenciais estão preenchidos
    if (!cliente || !contrato || !data || !horario) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    // Pega o bloco de notas
    const blocoNotas = document.getElementById('blocoNotas');

    // Cria um novo div para a nota
    const nota = document.createElement('div');
    nota.classList.add('registro-bloco'); // classe base do CSS

    // Adiciona cor conforme o tipo
    switch (tipo.toLowerCase()) {
        case 'retido':
            nota.classList.add('tipo-retido');
            break;
        case 'cancelado':
            nota.classList.add('tipo-cancelado');
            break;
        case 'suporte':
            nota.classList.add('tipo-suporte');
            break;
        case 'venda':
            nota.classList.add('tipo-venda');
            break;
    }

    // Conteúdo do registro usando <span> para alinhar
    nota.innerHTML = `
        <span><strong>Cliente:</strong> ${cliente}</span>
        <span><strong>Contrato:</strong> ${contrato}</span>
        <span><strong>Data/Horário:</strong> ${data} ${horario}</span>
        <span><strong>Tipo:</strong> ${tipo}</span>
        <span><strong>Status:</strong> ${status}</span>
        <span><strong>Obs:</strong> ${obs}</span>
        <hr>
    `;

    // Adiciona a nota no bloco
    blocoNotas.appendChild(nota);

    // Limpa os campos do formulário
    document.getElementById('cliente').value = '';
    document.getElementById('contrato').value = '';
    document.getElementById('data').value = '';
    document.getElementById('horario').value = '';
    document.getElementById('tipo').value = 'Venda';
    document.getElementById('status').value = 'Retido';
    document.getElementById('obs').value = '';
}
