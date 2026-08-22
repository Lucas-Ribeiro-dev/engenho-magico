document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Carrossel Hero removida (agora é um Hero estático único card)

    // ==========================================================================
    // EFEITO PARALLAX 3D (Home)
    // ==========================================================================
    const imagensParallax = document.querySelectorAll('.who-we-are__image, .solution-detail__image');

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


    // EFEITO PARALLAX CAMADAS (Seção Sobre)
    const containerCamadas = document.querySelector('.about__image-wrapper');
    const camadas = document.querySelectorAll('.parallax-layer');

    if (containerCamadas && camadas.length > 0) {
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                const rect = containerCamadas.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Normaliza para -1 (topo da tela) a +1 (fundo da tela), 0 quando centrado
                const rawOffset = (rect.top + rect.height / 2) - (windowHeight / 2);
                const normalizedOffset = Math.max(-1, Math.min(1, rawOffset / (windowHeight / 2)));

                camadas.forEach(camada => {
                    const factor = parseFloat(camada.getAttribute('data-factor')) || 0;
                    if (factor > 0) {
                        const moveY = normalizedOffset * factor;
                        camada.style.transform = `translate3d(0px, ${moveY}px, 0px)`;
                    }
                });
            });
        });
    }

    // ==========================================================================
    // EFEITO PARALLAX SCROLL (Itens flutuantes da jornada)
    // ==========================================================================
    const floatingElements = document.querySelectorAll('.floating-parallax-img');
    
    if (floatingElements.length > 0) {
        let tickingFloating = false;
        
        const updateFloatingParallax = () => {
            const scrollY = window.scrollY;
            floatingElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
                // Move no eixo Y baseado no scroll global e na velocidade individual
                el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            });
            tickingFloating = false;
        };

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!prefersReducedMotion.matches) {
            window.addEventListener('scroll', () => {
                if (!tickingFloating) {
                    requestAnimationFrame(updateFloatingParallax);
                    tickingFloating = true;
                }
            }, { passive: true });
        }
    }


    // ==========================================================================
    // EFEITO SCROLL TRIGGER NAS ETAPAS (Metodologia)
    // ==========================================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const etapas = document.querySelectorAll('.step');

        etapas.forEach((etapa) => {
            const bolinha = etapa.querySelector('.step__number');
            const conteudo = etapa.querySelector('.step__content');

            if (bolinha && conteudo) {
                // Estado inicial
                gsap.set(bolinha, {
                    scale: 0.5,
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
                        once: true // Executa apenas uma vez e não retorna ao fazer scroll para cima
                    }
                });

                // 1º Bolinha nasce
                tl.to(bolinha, {
                    scale: 1,
                    opacity: 1,
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

    // ==========================================================================
    // EFEITO PARALLAX HERO (Todas as páginas internas)
    // ==========================================================================
    const hero = document.querySelector('.page-hero');
    const layers = hero?.querySelectorAll('[data-speed]');

    let ticking = false;

    function updateHeroParallax() {
        if (!hero || !layers) return;

        const heroRect = hero.getBoundingClientRect();
        const heroHeight = hero.offsetHeight;

        const progress = Math.min(
            Math.max(-heroRect.top / heroHeight, 0),
            1
        );

        layers.forEach((layer) => {
            const speed = Number(layer.dataset.speed) || 0;
            const maximumMovement = heroHeight * 0.48;
            const movement = progress * maximumMovement * speed;

            layer.style.setProperty(
                '--parallax-y',
                `${movement.toFixed(2)}px`
            );
        });

        ticking = false;
    }

    function requestParallaxUpdate() {
        if (ticking) return;

        ticking = true;
        requestAnimationFrame(updateHeroParallax);
    }

    window.addEventListener('scroll', requestParallaxUpdate, {
        passive: true
    });

    window.addEventListener('resize', requestParallaxUpdate);

    updateHeroParallax();

    // ==========================================================================
    // EFEITO PARALLAX MAPA DA JORNADA (Home)
    // ==========================================================================
    const journeyMapContainer = document.querySelector('.journey-map-container');
    const journeyMapRota = document.getElementById('journeyMapRota');

    if (journeyMapContainer && journeyMapRota) {
        let tickingJourney = false;

        const updateJourneyParallax = () => {
            const rect = journeyMapContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const totalScrollDistance = windowHeight + rect.height;
                const scrolled = windowHeight - rect.top;
                const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));

                const isMobile = window.innerWidth <= 768;
                
                const speedRota = isMobile ? 0.01 : 0.02; // Rota está no fundo, ancorada e move-se mais lentamente

                const maxMoveRota = journeyMapContainer.offsetHeight * speedRota;
                
                const movementRota = (maxMoveRota / 2) - (progress * maxMoveRota);

                journeyMapRota.style.transform = `translate3d(0, ${movementRota.toFixed(2)}px, 0)`;
            }
            tickingJourney = false;
        };

        const requestJourneyParallaxUpdate = () => {
            if (!tickingJourney) {
                requestAnimationFrame(updateJourneyParallax);
                tickingJourney = true;
            }
        };

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!prefersReducedMotion.matches) {
            window.addEventListener('scroll', requestJourneyParallaxUpdate, { passive: true });
            window.addEventListener('resize', requestJourneyParallaxUpdate, { passive: true });
            updateJourneyParallax();
        }
    }
});
