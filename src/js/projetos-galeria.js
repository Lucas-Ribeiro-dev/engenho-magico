document.addEventListener('DOMContentLoaded', () => {
    // Dados da Galeria
    const basePath = 'src/assets/portifolio/fotos-portifolio';
    const galeriaDados = [
        // Ciclo 1
        { src: `${basePath}/geral/1.jpeg`, alt: 'Grupo em ação na experiência', objectPosition: 'center' },
        { src: `${basePath}/geral/2.jpeg`, alt: 'Participantes interagindo', objectPosition: 'center' },
        { src: `${basePath}/geral/3.jpeg`, alt: 'Detalhe do cenário', objectPosition: 'center' },
        { src: `${basePath}/geral/4.jpeg`, alt: 'Missão acontecendo', objectPosition: 'center' },
        { src: `${basePath}/geral/5.jpeg`, alt: 'Artefato mágico', objectPosition: 'center' },
        { src: `${basePath}/geral/6.jpeg`, alt: 'Equipe solucionando enigma', objectPosition: 'center' },
        
        // Ciclo 2
        { src: `${basePath}/geral/7.jpeg`, alt: 'Personagens em ação', objectPosition: 'center' },
        { src: `${basePath}/geral/8.jpeg`, alt: 'Interação com a tecnologia', objectPosition: 'center' },
        { src: `${basePath}/geral/9.jpeg`, alt: 'Cenário completo do projeto', objectPosition: 'center' },
        { src: `${basePath}/geral/10.jpeg`, alt: 'Detalhes de fabricação', objectPosition: 'center' },
        { src: `${basePath}/geral/11.jpeg`, alt: 'Cartas e materiais', objectPosition: 'center' },
        { src: `${basePath}/geral/12.jpeg`, alt: 'Jogadores celebrando', objectPosition: 'center' },
        
        // Ciclo 3
        { src: `${basePath}/labirinto-de-astreia/1.jpeg`, alt: 'Labirinto de Astreia - Participantes', objectPosition: 'center' },
        { src: `${basePath}/labirinto-de-astreia/2.jpeg`, alt: 'Labirinto de Astreia - Detalhe', objectPosition: 'center' },
        { src: `${basePath}/labirinto-de-astreia/3.jpeg`, alt: 'Labirinto de Astreia - Interação', objectPosition: 'center' },
        { src: `${basePath}/labirinto-de-astreia/4.jpeg`, alt: 'Labirinto de Astreia - Grupo', objectPosition: 'center' },
        { src: `${basePath}/labirinto-de-astreia/5.jpeg`, alt: 'Labirinto de Astreia - Cenário', objectPosition: 'center' },
        { src: `${basePath}/labirinto-de-astreia/6.jpeg`, alt: 'Labirinto de Astreia - Artefatos', objectPosition: 'center' },
        
        // Fim Incompleto (4 imagens)
        { src: `${basePath}/didaticos/1.jpeg`, alt: 'Materiais Didáticos', objectPosition: 'center' },
        { src: `${basePath}/didaticos/2.jpeg`, alt: 'Materiais Didáticos', objectPosition: 'center' },
        { src: `${basePath}/didaticos/3.jpeg`, alt: 'Materiais Didáticos', objectPosition: 'center' },
        { src: `${basePath}/didaticos/4.jpeg`, alt: 'Materiais Didáticos', objectPosition: 'center' }
    ];

    const galeriaContainer = document.getElementById('galeria-editorial-grid');
    if (!galeriaContainer) return;

    // Lógica para definir os papéis
    function getPapel(index, total) {
        // Se houver tamanho manual nos dados, ele sobrepõe
        if (galeriaDados[index].size) {
            return galeriaDados[index].size;
        }

        const cycleIndex = index % 12; // Um macro-ciclo de 12 imagens (2 sub-ciclos de 6)
        const inCycleRemaining = total - (Math.floor(index / 6) * 6);
        const inLastGroup = index >= Math.floor(total / 6) * 6;

        // Se estamos no último grupo e ele é incompleto
        if (inLastGroup && inCycleRemaining < 6) {
            if (inCycleRemaining === 1) return 'larga-full'; // 12 colunas
            if (inCycleRemaining === 2) return 'metade'; // 6 colunas cada
            if (inCycleRemaining === 3) {
                // uma maior e duas menores (6x2, 3x2, 3x2)
                const relativeIndex = index % 6;
                if (relativeIndex === 0) return 'destaque';
                return 'vertical';
            }
            if (inCycleRemaining === 4) {
                // duas imagens por linha (6x2, 6x2)
                return 'metade-altura'; 
            }
            if (inCycleRemaining === 5) {
                // três na primeira (4x2, 4x2, 4x2) e duas na segunda (6x2, 6x2)
                const relativeIndex = index % 6;
                if (relativeIndex < 3) return 'terca-parte';
                return 'metade-altura';
            }
        }

        // Padrão Normal Cíclico
        if (cycleIndex < 6) {
            // Ciclo 1 (Destaque Esquerda)
            switch (cycleIndex) {
                case 0: return 'destaque';
                case 1: return 'vertical';
                case 2: return 'vertical';
                case 3: return 'larga';
                case 4: return 'media';
                case 5: return 'media-larga';
            }
        } else {
            // Ciclo 2 (Destaque Direita)
            switch (cycleIndex) {
                case 6: return 'vertical';
                case 7: return 'vertical';
                case 8: return 'destaque';
                case 9: return 'media-larga';
                case 10: return 'media';
                case 11: return 'larga';
            }
        }
    }

    // Renderizar itens
    galeriaDados.forEach((item, index) => {
        const papel = getPapel(index, galeriaDados.length);
        const moldura = index % 2 === 0 ? 'border-gallery-2.webp' : 'border-gallery-1.webp';
        
        const itemHtml = `
            <div class="gallery-item gl-${papel}" data-index="${index}" tabindex="0">
                <img src="${item.src}" alt="${item.alt}" class="gallery-item__img" style="object-position: ${item.objectPosition || 'center'};">
                <div class="gallery-item__border" style="border-image-source: url('src/assets/img/elements/${moldura}');"></div>
            </div>
        `;
        galeriaContainer.insertAdjacentHTML('beforeend', itemHtml);
    });

    // --- Lightbox Lógica ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');
    
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
        lightbox.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    function updateLightbox() {
        const item = galeriaDados[currentIndex];
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        if(lightboxCounter) {
            lightboxCounter.textContent = `${currentIndex + 1} / ${galeriaDados.length}`;
        }
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galeriaDados.length;
        updateLightbox();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galeriaDados.length) % galeriaDados.length;
        updateLightbox();
    }

    // Eventos do Grid
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const index = parseInt(item.getAttribute('data-index'));
            openLightbox(index);
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const index = parseInt(item.getAttribute('data-index'));
                openLightbox(index);
            }
        });
    });

    // Eventos do Lightbox
    if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if(lightboxNext) lightboxNext.addEventListener('click', showNext);
    if(lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
});
