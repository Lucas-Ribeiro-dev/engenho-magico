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

    // ==========================================================================
    // EFEITO PARALLAX 3D (Home)
    // ==========================================================================
    const imagensParallax = document.querySelectorAll('.sobre__imagem, .cartao-solucao__imagem, .quem-somos__imagem, .solucao-detalhe__imagem');

    if (imagensParallax.length > 0) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Normalizando posicoes entre -1 e 1
            const normalizedX = (mouseX / windowWidth) * 2 - 1;
            const normalizedY = (mouseY / windowHeight) * 2 - 1;

            imagensParallax.forEach(img => {
                // Obter a posição da imagem na tela para calcular se está visível/próxima
                const rect = img.getBoundingClientRect();
                
                // Aplicar efeito apenas se a imagem estiver minimamente na tela
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const moveX = normalizedX * 10; // graus de rotação maxima
                    const moveY = normalizedY * -10;
                    
                    // Aplicar transform smooth
                    img.style.transition = 'transform 0.1s ease-out';
                    img.style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg) scale(1.02)`;
                }
            });
        });

        // Resetar ao sair da janela
        document.addEventListener('mouseleave', () => {
            imagensParallax.forEach(img => {
                img.style.transition = 'transform 0.5s ease-out';
                img.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            });
        });
    }
});
