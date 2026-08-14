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

    // ==========================================================================
    // EFEITO PARALLAX SCROLL (Seção Público Formatos)
    // ==========================================================================
    const imgEsqCima = document.querySelector('.publico-formatos__imagem-parallax--esq-cima');
    const imgDirBaixo = document.querySelector('.publico-formatos__imagem-parallax--dir-baixo');

    if (imgEsqCima || imgDirBaixo) {
        window.addEventListener('scroll', () => {
            // Usa requestAnimationFrame para performance
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                
                // Movimento leve:
                // Imagem cima desce (translateY positivo)
                if (imgEsqCima) {
                    imgEsqCima.style.transform = `translateY(${scrollY * 0.15}px)`;
                }
                
                // Imagem baixo sobe (translateY negativo)
                if (imgDirBaixo) {
                    imgDirBaixo.style.transform = `translateY(${scrollY * -0.15}px)`;
                }
            });
        });
    }

    // ==========================================================================
    // EFEITO SCROLL TRIGGER NAS ETAPAS (Como Funciona)
    // ==========================================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const etapas = document.querySelectorAll('.etapa');
        
        etapas.forEach((etapa) => {
            const bolinha = etapa.querySelector('.etapa__numero');
            const conteudo = etapa.querySelector('.etapa__conteudo');

            if (bolinha && conteudo) {
                // Estado inicial
                gsap.set(bolinha, { 
                    scale: 0.5, 
                    filter: 'grayscale(100%)',
                    opacity: 0
                });
                gsap.set(conteudo, { 
                    x: 40, 
                    opacity: 0 
                });

                // Timeline para cada etapa
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: etapa,
                        start: 'top 75%', // Ponto onde a 'linha' virtual atinge a etapa
                        toggleActions: 'play none none reverse'
                    }
                });

                // 1º Bolinha nasce (acende e destaca)
                tl.to(bolinha, {
                    scale: 1,
                    opacity: 1,
                    filter: 'grayscale(0%)',
                    backgroundImage: 'var(--gradiente-fogo)',
                    boxShadow: '0 0 20px rgba(244, 96, 10, 0.6)',
                    duration: 0.5,
                    ease: 'back.out(1.5)'
                })
                // 2º Conteúdo surge (desliza com fade-in)
                .to(conteudo, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.out'
                }, "-=0.2");
            }
        });
    }
});
