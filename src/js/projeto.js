/* src/js/projeto.js */

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the single project page
    if (!document.querySelector('.projeto-single-page')) return;

    // Optional: Get project ID from URL (e.g. ?id=projeto-01)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Provisonal mock data. In the future this can be loaded from an API/JSON or built from the HTML.
    const projectData = {
        title: "Projeto de Demonstração",
        context: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "In hac habitasse platea dictumst. Curabitur vel metus dictum, faucibus eros non, iaculis erat. Aliquam non semper nisl. Aenean ullamcorper congue odio vitae commodo. Nam sed consequat nisi. Proin varius ex at pretium accumsan.",
            "Aliquam erat volutpat. Fusce ullamcorper interdum elit, eget posuere metus vehicula id. Proin vulputate sem vel congue pretium. Nulla facilisi. Sed non lorem eget est imperdiet placerat."
        ],
        // Array of pages (images) for the visualizer
        pages: [
            "src/assets/img/placeholder.png",
            "src/assets/img/placeholder.png", 
            "src/assets/img/placeholder.png",
            "src/assets/img/placeholder.png"
        ]
    };

    // DOM Elements
    const elements = {
        title: document.getElementById('projetoTitle'),
        contextContainer: document.querySelector('.projeto-context__text'),
        image: document.getElementById('projetoImage'),
        indicator: document.getElementById('pageIndicator'),
        btnPrev: document.getElementById('btnPrev'),
        btnNext: document.getElementById('btnNext')
    };

    let currentPageIndex = 0;
    const totalPages = projectData.pages.length;

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
        } else {
            applyUpdate();
        }
    }

    function applyUpdate() {
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

    // Keyboard navigation (arrows)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !elements.btnPrev.disabled) {
            currentPageIndex--;
            updateGallery();
        } else if (e.key === 'ArrowRight' && !elements.btnNext.disabled) {
            currentPageIndex++;
            updateGallery();
        }
    });

    init();
});
