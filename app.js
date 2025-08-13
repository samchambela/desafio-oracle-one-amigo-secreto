let listaNomes = [];
let inputNome = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let botaoAdicionar = document.querySelector('.button-add');
let botaoSortear = document.querySelector('.button-draw');
let resultado = document.getElementById('resultado');

function limparInput() {
    inputNome.value = '';
}

function adicionarAmigo() {
    let nome = inputNome.value.trim();
    if (nome && !listaNomes.includes(nome)) {
        listaNomes.push(nome);
        gerenciarAmigos();
        limparInput();
    } else if (nome == '') {
        limparInput();
        alert('Por favor, insira um nome.');
    }
    else {
        limparInput();
        alert('O nome já existe na lista!');
    }
}

inputNome.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

function removerAmigo(nomeParaRemover) {
    let indice = listaNomes.indexOf(nomeParaRemover);
    if (indice > -1) {
        listaNomes.splice(indice, 1);
        gerenciarAmigos();
    }
}

function gerenciarAmigos() {
    lista.innerHTML = '';

    listaNomes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;

        let botaoExcluir = document.createElement('span');
        botaoExcluir.textContent = ' ❌';
        botaoExcluir.classList.add('btn-excluir');

        botaoExcluir.onclick = () => removerAmigo(nome);
        
        li.appendChild(botaoExcluir);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNomes.length < 2) {
        alert('Insira dois ou mais nomes para realizar o sorteio.');
        return;
    }

    resultado.innerHTML = ''; 
    
    let nomeAleatorio = Math.floor(Math.random() * listaNomes.length);

    let resultadoSorteio = document.createElement('li');
    resultadoSorteio.textContent = `Seu amigo secreto é: ${listaNomes[nomeAleatorio]}`;
    resultado.appendChild(resultadoSorteio);

    botaoAdicionar.disabled = true;
    botaoSortear.disabled = true;
}