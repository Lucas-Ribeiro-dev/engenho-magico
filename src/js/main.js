document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Carrossel Hero (Posicionamento Absoluto)
    const carrossel = document.querySelector('.heroi__carrossel');
    
    if (carrossel) {
        const cards = Array.from(carrossel.querySelectorAll('.cartao-slide'));
        
        if (cards.length > 0) {
            // Arrays contendo a posição atual de cada card (0 a N-1)
            let posicoes = cards.map((_, i) => i);

            const atualizarPosicoes = () => {
                cards.forEach((card, i) => {
                    card.setAttribute('data-pos', posicoes[i]);
                });
            };

            const proximo = () => {
                posicoes = posicoes.map(p => (p === 0 ? cards.length - 1 : p - 1));
                atualizarPosicoes();
            };

            const anterior = () => {
                posicoes = posicoes.map(p => (p === cards.length - 1 ? 0 : p + 1));
                atualizarPosicoes();
            };

            const irParaSlot = (slotClicado) => {
                if (slotClicado === 0) return;
                posicoes = posicoes.map(p => {
                    let nova = p - slotClicado;
                    if (nova < 0) nova += cards.length;
                    return nova;
                });
                atualizarPosicoes();
            };

            cards.forEach((card) => {
                // Controles Internos
                const btnAnterior = card.querySelector('.cartao-slide__controle--anterior');
                if (btnAnterior) {
                    btnAnterior.addEventListener('click', (e) => {
                        e.stopPropagation();
                        anterior();
                    });
                }

                const btnProximo = card.querySelector('.cartao-slide__controle--proximo');
                if (btnProximo) {
                    btnProximo.addEventListener('click', (e) => {
                        e.stopPropagation();
                        proximo();
                    });
                }

                // Clique na área standby
                card.addEventListener('click', () => {
                    const slotAtual = parseInt(card.getAttribute('data-pos'));
                    if (slotAtual !== 0) {
                        irParaSlot(slotAtual);
                    }
                });
            });

            // Estado inicial garantido
            atualizarPosicoes();
        }
    }
});
