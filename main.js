// Seleciona os elementos do HTML
const botaoCurtir = document.getElementById('botao-curtir');
const contador = document.getElementById('contador-curtidas');

let totalCurtidas = 0;

// Adiciona o evento de clique no botão
botaoCurtir.addEventListener('click', () => {
    totalCurtidas++; // Aumenta o número de curtidas em 1
    contador.textContent = totalCurtidas; // Atualiza o texto na tela
    
    // Efeito simples de clique
    botaoCurtir.style.transform = 'scale(1.1)';
    setTimeout(() => {
        botaoCurtir.style.transform = 'scale(1)';
    }, 100);
});
