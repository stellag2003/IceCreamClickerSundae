function iniciarJogo() {
    // Redireciona para a tela principal do jogo
    window.location.href = "intro.html";
}

const precos = {
    pinguim: 10,
    urso: 50,
    carrinhoSorvete: 600,
    sorveteria: 1000
};

let sorvete = 0;
let geradorPorSegundo = 0;
let addClick = 1;

const custo = {
    pinguim: precos.pinguim,
    urso: precos.urso,
    carrinhoSorvete: precos.carrinhoSorvete,
    sorveteria: precos.sorveteria
};

// Função para atualizar as melhorias
function atualizarMelhorias() {
    const itens = document.querySelectorAll('.item');

    itens.forEach(item => {
        const tipo = item.getAttribute('data-tipo'); // Nome do item (pinguim, urso, etc.)
        const preco = parseInt(item.getAttribute('data-preco'));
        const bloqueio = item.querySelector('.bloqueio');
        const melhoria = item.querySelector('.btn');
        const precoElemento = item.querySelector('.preco');

        if (tipo === "pinguim") {
            // O pinguim deve estar SEMPRE visível
            if (bloqueio) bloqueio.style.display = "none";
            if (melhoria) melhoria.style.display = "block";
            if (precoElemento) precoElemento.style.display = "block";
        } else {
            // Para os outros itens, verifica se já pode ser comprado
            if (sorvete >= preco) {
                if (bloqueio) bloqueio.style.display = "none";
                if (melhoria) melhoria.style.display = "block";
                if (precoElemento) precoElemento.style.display = "block"; // Exibe o preço
            } else {
                if (bloqueio) bloqueio.style.display = "block";
                if (melhoria) melhoria.style.display = "none";
                if (precoElemento) precoElemento.style.display = "none"; // Esconde o preço
            }
        }
    });
}



function ganharSorvete() {
    sorvete += addClick;
    atualizarInterface();
    atualizarMelhorias(); // Atualiza as melhorias ao ganhar sorvetes
}

function comprarItem(tipo) {
    if (sorvete >= custo[tipo]) {
        sorvete -= custo[tipo]; // Deduz o custo do item
        if (tipo === 'pinguim') geradorPorSegundo += 5;
        if (tipo === 'urso') geradorPorSegundo += 10;
        if (tipo === 'carrinhoSorvete') addClick += 40;
        if (tipo === 'sorveteria') geradorPorSegundo += 100;
        custo[tipo] *= 2; // Dobra o preço do item
        atualizarInterface();
        atualizarMelhorias(); // Atualiza as melhorias após a compra
    } else {
        alert("Sorvetes insuficientes :(");
    }
}

function atualizarInterface() {
    // Atualiza a quantidade de sorvetes e o gerador por segundo
    document.getElementById("sorvete").textContent = sorvete;
    document.getElementById("gerador").textContent = geradorPorSegundo;

    // Atualiza os preços dos itens na interface
    document.getElementById("pinguimPreco").innerHTML = `<img src="imagens/icone.png" alt="Ícone" width="20" height="20"> ${custo.pinguim}`;
    document.getElementById("ursoPreco").innerHTML = `<img src="imagens/icone.png" alt="Ícone" width="20" height="20"> ${custo.urso}`;
    document.getElementById("carrinhoPreco").innerHTML = `<img src="imagens/icone.png" alt="Ícone" width="20" height="20"> ${custo.carrinhoSorvete}`;
    document.getElementById("sorveteriaPreco").innerHTML = `<img src="imagens/icone.png" alt="Ícone" width="20" height="20"> ${custo.sorveteria}`;
}

// Atualiza a interface a cada segundo
setInterval(() => {
    sorvete += geradorPorSegundo;
    atualizarInterface();
    atualizarMelhorias(); // Atualiza as melhorias a cada segundo
}, 1000);

// Inicializa as melhorias ao carregar a página
atualizarMelhorias();