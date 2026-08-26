document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // MOBILE MENU
    // ==========================================================================
    const mobileMenuOpen = document.getElementById('mobileMenuOpen');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    if (mobileMenuOpen && mobileMenuClose && mobileMenu && mobileMenuOverlay) {
        const toggleMenu = (show) => {
            if (show) {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        };

        mobileMenuOpen.addEventListener('click', () => toggleMenu(true));
        mobileMenuClose.addEventListener('click', () => toggleMenu(false));
        mobileMenuOverlay.addEventListener('click', () => toggleMenu(false));
    }

    // Lógica do Carrossel Hero removida (agora é um Hero estático único card)

    // ==========================================================================
    // EFEITO PARALLAX CAMADAS (Seção Sobre)
    // ==========================================================================

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
    const floatingElements = document.querySelectorAll('.floating-parallax-img, .hero-floating-item');
    
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
    // EFEITO PARALLAX HERO (Todas as páginas internas)
    // ==========================================================================
    const hero = document.querySelector('.page-hero');
    const layers = hero?.querySelectorAll('[data-speed]');

    let ticking = false;

    function updateHeroParallax() {
        if (!hero || !layers) return;

        const heroHeight = hero.offsetHeight;

        // O hero agora é sticky, então seu offsetTop (getBoundingClientRect().top) fica constante
        // Usamos o window.scrollY para calcular o progresso da página
        const progress = Math.min(
            Math.max(window.scrollY / heroHeight, 0),
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
    // EFEITO SCALE HERO IMAGE (Home)
    // ==========================================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const heroHomeImage = document.querySelector('.hero__image');
        const heroHomeSection = document.querySelector('.hero');
        
        // Aplica o efeito apenas se os elementos existirem
        if (heroHomeImage && heroHomeSection) {
            gsap.to(heroHomeImage, {
                scale: 1.15,
                transformOrigin: 'center center',
                ease: 'none',
                scrollTrigger: {
                    trigger: heroHomeSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }

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
    // ==========================================================================
    // CATÁLOGO INTERATIVO (Metodologia)
    // ==========================================================================
    const catalogInteractive = document.getElementById('catalogInteractive');
    if (catalogInteractive) {
        const images = catalogInteractive.querySelectorAll('.catalog-interactive__img');
        const navItems = catalogInteractive.querySelectorAll('.catalog-interactive__nav-item');
        const descriptions = catalogInteractive.querySelectorAll('.catalog-interactive__desc');
        const currentCounter = document.getElementById('catalogCurrent');
        const currentCounterMob = document.getElementById('catalogCurrentMob');
        const mobileTitle = document.getElementById('catalogMobileTitle');
        const btnPrev = catalogInteractive.querySelector('.catalog-interactive__arrow--prev');
        const btnNext = catalogInteractive.querySelector('.catalog-interactive__arrow--next');
        const navContainer = document.getElementById('catalogNav');
        
        let currentIndex = 0;
        const totalItems = images.length;

        function updateCatalog(index) {
            // Remove active classes
            images.forEach(img => img.classList.remove('active'));
            navItems.forEach(item => item.classList.remove('active'));
            descriptions.forEach(desc => desc.classList.remove('active'));

            // Add active to current
            images[index].classList.add('active');
            navItems[index].classList.add('active');
            descriptions[index].classList.add('active');

            // Update text elements
            const newIndexStr = (index + 1).toString();
            if (currentCounter) currentCounter.textContent = newIndexStr;
            if (currentCounterMob) currentCounterMob.textContent = newIndexStr;
            
            if (mobileTitle) {
                mobileTitle.textContent = navItems[index].textContent;
            }

            // Centralizar scroll do nav no desktop
            if (window.innerWidth > 1024 && navContainer) {
                const activeItem = navItems[index];
                const containerHeight = navContainer.offsetHeight;
                const itemOffsetTop = activeItem.offsetTop;
                const itemHeight = activeItem.offsetHeight;
                const scrollTo = itemOffsetTop - (containerHeight / 2) + (itemHeight / 2);
                
                navContainer.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }

            currentIndex = index;
        }

        // Click nav items
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.getAttribute('data-index'));
                updateCatalog(index);
            });
        });

        // Navigation functions
        function goNext() {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= totalItems) nextIndex = 0; // Cyclic
            updateCatalog(nextIndex);
        }

        function goPrev() {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) prevIndex = totalItems - 1; // Cyclic
            updateCatalog(prevIndex);
        }

        // Button events
        if (btnNext) btnNext.addEventListener('click', goNext);
        if (btnPrev) btnPrev.addEventListener('click', goPrev);

        // Keyboard events
        catalogInteractive.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
            }
        });

        // Mouse wheel over the component
        catalogInteractive.addEventListener('wheel', (e) => {
            // Apenas intercepta o wheel se não estiver scrollando a navegação de fato
            // Evitar bloqueio excessivo da página
            const isScrollingNav = e.target.closest('#catalogNav');
            
            if (!isScrollingNav) {
                // Throttle simples para evitar scroll super rápido
                if (!catalogInteractive.isWheeling) {
                    catalogInteractive.isWheeling = true;
                    setTimeout(() => catalogInteractive.isWheeling = false, 800);

                    if (e.deltaY > 0) goNext();
                    else goPrev();
                }
            }
        }, { passive: true });

        // Swipe (mobile)
        let touchStartX = 0;
        let touchEndX = 0;
        
        catalogInteractive.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        catalogInteractive.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                goNext();
            } else if (touchEndX > touchStartX + swipeThreshold) {
                goPrev();
            }
        }
    }

    // ==========================================================================
    // LIGHTBOX GLOBAL
    // ==========================================================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImageObj = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightbox && lightboxImageObj && lightboxClose) {
        // Encontra todas as imagens que podem abrir no lightbox
        const galleryImages = document.querySelectorAll('.gallery-image, #projetoImage');
        
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImageObj.src = img.src;
                lightbox.classList.add('active');
            });
        });

        // Fechar pelo botão
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        // Fechar clicando fora da imagem
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        // Fechar no ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }
});
