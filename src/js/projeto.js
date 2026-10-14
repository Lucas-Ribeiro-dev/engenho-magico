<<<<<<< HEAD
/* ==========================================================================
   ENGENHO MÁGICO - CONTROLE DO DOSSIÊ DO PROJETO (PROJETO.JS)
   Renderização dinâmica de lâminas (01 a 05) e textos Ipsis Litteris
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('.projeto-single-page')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'mago-das-letras';

    // Lista padrão de entregas e públicos para os projetos que possuem esses tópicos
    const entregasPadrao = [
        "Conceito",
        "Storytelling",
        "Game design",
        "Projeto da experiência",
        "Cenografia e artefatos",
        "Tecnologia",
        "Implantação",
        "Treinamento operacional"
    ];

    const servePadrao = [
        "Escolas e Instituições",
        "Famílias",
        "Parques e Resorts",
        "Empresas ou Eventos"
    ];

    const detalhesPadrao = "Espaço reservado para textos adicionais, descrições detalhadas ou resultados alcançados com esta experiência.";

    const projectsData = {
        'mago-das-letras': {
            title: "O Mago das Letras",
            pontoPartida: [
=======
/* src/js/projeto.js */

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the single project page
    if (!document.querySelector('.projeto-single-page')) return;

    // Optional: Get project ID from URL (e.g. ?id=projeto-01)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'mago-das-letras';

    // Provisonal mock data. In the future this can be loaded from an API/JSON or built from the HTML.
    const projectsData = {
        'mago-das-letras': {
            title: "O Mago das Letras",
            context: [
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "In hac habitasse platea dictumst. Curabitur vel metus dictum, faucibus eros non, iaculis erat. Aliquam non semper nisl. Aenean ullamcorper congue odio vitae commodo. Nam sed consequat nisi. Proin varius ex at pretium accumsan.",
                "Aliquam erat volutpat. Fusce ullamcorper interdum elit, eget posuere metus vehicula id. Proin vulputate sem vel congue pretium. Nulla facilisi. Sed non lorem eget est imperdiet placerat."
            ],
<<<<<<< HEAD
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
            // Array of pages (images) for the visualizer
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_mago-das-letras/capa.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'elara': {
            title: "O Paradeiro de Elara",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
        'elara': {
            title: "O Paradeiro de Elara",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/capa.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'arena-viva': {
            title: "Arena Viva",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            // Arena Viva não possui as seções finais nos dados originais
=======
        'arena-viva': {
            title: "Arena Viva",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_arena-imersiva/capa.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'caixa-magica': {
            title: "Caixa Mágica",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            // Caixa Mágica não possui as seções finais nos dados originais
=======
        'caixa-magica': {
            title: "Caixa Mágica",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/capa.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'labirinto-asteria': {
            title: "Labirinto de Astéria",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
        'labirinto-asteria': {
            title: "Labirinto de Astéria",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/capa.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'caminhantes-cosmos': {
            title: "Caminhantes do Cosmos",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
        'caminhantes-cosmos': {
            title: "Caminhantes do Cosmos",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/capa.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'capitao-jk': {
            title: "Capitão JK",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
        'capitao-jk': {
            title: "Capitão JK",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/capa.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'quatro-elementos': {
            title: "Jornada dos Quatro Elementos",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
        'quatro-elementos': {
            title: "Jornada dos Quatro Elementos",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/capa.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'desafio-na-praia': {
            title: "Desafio Na Praia 4 Elementos",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
        'desafio-na-praia': {
            title: "Desafio Na Praia 4 Elementos",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/capa.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-4.webp"
            ]
        },
<<<<<<< HEAD

        'escola-parque': {
            title: "Escola Parque Na Praia",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
=======
        'escola-parque': {
            title: "Escola Parque Na Praia",
            context: ["Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.", "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."],
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            pages: [
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/capa.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-4.webp"
            ]
        }
    };

    const projectData = projectsData[projectId] || projectsData['mago-das-letras'];

<<<<<<< HEAD
    // Elementos DOM
    const elements = {
        title: document.getElementById('projetoTitle'),
        dossierBox: document.getElementById('dossierTextBox'),
        image: document.getElementById('projetoImage'),
        indicator: document.getElementById('pageIndicator'),
        btnPrev: document.getElementById('btnPrev'),
        btnNext: document.getElementById('btnNext')
=======
    // DOM Elements
    const elements = {
        title: document.getElementById('projetoTitle'),
        contextContainer: document.querySelector('.projeto-context__text'),
        image: document.getElementById('projetoImage'),
        indicator: document.getElementById('pageIndicator'),
        btnPrev: document.getElementById('btnPrev'),
        btnNext: document.getElementById('btnNext'),
        lightbox: document.getElementById('lightbox'),
        lightboxImage: document.getElementById('lightboxImage'),
        lightboxCounter: document.getElementById('lightboxCounter'),
        lightboxPrev: document.getElementById('lightboxPrev'),
        lightboxNext: document.getElementById('lightboxNext')
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
    };

    let currentPageIndex = 0;
    const totalPages = projectData.pages.length;

<<<<<<< HEAD
    // Renderizador Dinâmico dos Textos Ipsis Litteris
    function renderDossierContent() {
        if (!elements.dossierBox) return;

        let html = '';

        // 1. O ponto de partida
        if (projectData.pontoPartida) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O ponto de partida</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  ${projectData.pontoPartida.map(p => `<p>${p}</p>`).join('')}
                </div>
              </article>
            `;
        }

        // 2. O universo criado
        if (projectData.universoCriado) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O universo criado</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <p>${projectData.universoCriado}</p>
                </div>
              </article>
            `;
        }

        // 3. O que o participante faz
        if (projectData.participanteFaz) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O que o participante faz</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <p>${projectData.participanteFaz}</p>
                </div>
              </article>
            `;
        }

        // 4. O que entregamos (renderiza apenas se existir no projeto)
        if (projectData.entregamos && projectData.entregamos.length > 0) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O que entregamos</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <ul class="dossier-list">
                    ${projectData.entregamos.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `;
        }

        // 5. Para quem serve (renderiza apenas se existir no projeto)
        if (projectData.paraQuemServe && projectData.paraQuemServe.length > 0) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">Para quem serve</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <ul class="dossier-list">
                    ${projectData.paraQuemServe.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `;
        }

        // 6. Detalhes do Projeto (renderiza apenas se existir no projeto)
        if (projectData.detalhesProjeto) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">Detalhes do Projeto</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <p>${projectData.detalhesProjeto}</p>
                </div>
              </article>
            `;
        }

        elements.dossierBox.innerHTML = html;
        elements.dossierBox.scrollTop = 0; // Reseta a barra de rolagem sempre para o início
    }

    function init() {
        if (elements.title) {
            elements.title.textContent = projectData.title;
            document.title = `${projectData.title} | Engenho Mágico`;
        }

        renderDossierContent();
        updateGallery(true);
    }

    function updateGallery(isInitial = false) {
        if (!elements.image) return;

        if (!isInitial) {
            elements.image.classList.add('fade-out');
            setTimeout(applyUpdate, 180);
=======
    function init() {
        // Here we could use projectId to load specific data if available
        // Set initial texts
        elements.title.textContent = projectData.title;

        // Render context paragraphs
        elements.contextContainer.innerHTML = projectData.context
            .map(p => `<p>${p}</p>`)
            .join('');

        updateGallery(true); // true = no animation on first load
    }

    function updateGallery(isInitial = false) {
        if (!isInitial) {
            // Add fade out
            elements.image.classList.add('fade-out');

            // Wait for transition before changing source
            setTimeout(applyUpdate, 300); // 300ms matches css transition
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
        } else {
            applyUpdate();
        }
    }

    function applyUpdate() {
<<<<<<< HEAD
        elements.image.src = projectData.pages[currentPageIndex];

        const currentFormatted = String(currentPageIndex + 1).padStart(2, '0');
        const totalFormatted = String(totalPages).padStart(2, '0');
        if (elements.indicator) {
            elements.indicator.textContent = `${currentFormatted} / ${totalFormatted}`;
        }

        if (elements.btnPrev) elements.btnPrev.disabled = currentPageIndex === 0;
        if (elements.btnNext) elements.btnNext.disabled = currentPageIndex === totalPages - 1;

        elements.image.classList.remove('fade-out');
    }

    if (elements.btnPrev) {
        elements.btnPrev.addEventListener('click', () => {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                updateGallery();
            }
        });
    }

    if (elements.btnNext) {
        elements.btnNext.addEventListener('click', () => {
            if (currentPageIndex < totalPages - 1) {
                currentPageIndex++;
                updateGallery();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && elements.btnPrev && !elements.btnPrev.disabled) {
            currentPageIndex--;
            updateGallery();
        } else if (e.key === 'ArrowRight' && elements.btnNext && !elements.btnNext.disabled) {
=======
        // Update image source
        elements.image.src = projectData.pages[currentPageIndex];

        // Format indicator like "01 / 04"
        const currentFormatted = String(currentPageIndex + 1).padStart(2, '0');
        const totalFormatted = String(totalPages).padStart(2, '0');
        elements.indicator.textContent = `${currentFormatted} / ${totalFormatted}`;

        // Update button disabled states
        elements.btnPrev.disabled = currentPageIndex === 0;
        elements.btnNext.disabled = currentPageIndex === totalPages - 1;

        // Remove fade out if applied
        elements.image.classList.remove('fade-out');
    }

    function updateLightbox() {
        elements.lightboxImage.src = projectData.pages[currentPageIndex];
        elements.lightboxImage.alt = `${projectData.title}, página ${currentPageIndex + 1} de ${totalPages}`;
        elements.lightboxCounter.textContent = `${currentPageIndex + 1} / ${totalPages}`;
        elements.lightboxPrev.disabled = currentPageIndex === 0;
        elements.lightboxNext.disabled = currentPageIndex === totalPages - 1;
    }

    function showPreviousLightboxPage() {
        if (currentPageIndex === 0) return;
        currentPageIndex--;
        updateLightbox();
    }

    function showNextLightboxPage() {
        if (currentPageIndex === totalPages - 1) return;
        currentPageIndex++;
        updateLightbox();
    }

    // Event Listeners for buttons
    elements.btnPrev.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateGallery();
        }
    });

    elements.btnNext.addEventListener('click', () => {
        if (currentPageIndex < totalPages - 1) {
            currentPageIndex++;
            updateGallery();
        }
    });

    elements.image.addEventListener('click', updateLightbox);
    elements.lightboxPrev.addEventListener('click', showPreviousLightboxPage);
    elements.lightboxNext.addEventListener('click', showNextLightboxPage);

    // Keyboard navigation (arrows)
    document.addEventListener('keydown', (e) => {
        const lightboxIsOpen = elements.lightbox.classList.contains('active');

        if (lightboxIsOpen && e.key === 'ArrowLeft') {
            showPreviousLightboxPage();
        } else if (lightboxIsOpen && e.key === 'ArrowRight') {
            showNextLightboxPage();
        } else if (!lightboxIsOpen && e.key === 'ArrowLeft' && !elements.btnPrev.disabled) {
            currentPageIndex--;
            updateGallery();
        } else if (!lightboxIsOpen && e.key === 'ArrowRight' && !elements.btnNext.disabled) {
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
            currentPageIndex++;
            updateGallery();
        }
    });

    init();
<<<<<<< HEAD
});
=======
});
>>>>>>> 7c05806c20a36165f683a0af85a59d4ff2803fb7
