import os
import glob
import re

header_replacement = """            <nav class="header__nav">
                <ul class="header__menu">
                    <li class="header__item"><a href="index.html" class="header__link">Início</a></li>
                    <li class="header__item"><a href="sobre-nos.html" class="header__link">Sobre Nós</a></li>
                    <li class="header__item"><a href="solucoes.html" class="header__link">Soluções</a></li>
                    <li class="header__item"><a href="projetos.html" class="header__link">Projetos</a></li>
                    <li class="header__item"><a href="contato.html" class="header__link">Contato</a></li>
                </ul>
            </nav>
            <div class="header__actions">
                <a href="contato.html" class="btn-cta header__cta"><span class="btn-text">Vamos conversar</span></a>
                <button class="header__menu-btn" aria-label="Abrir menu" id="mobileMenuOpen">
                    <img src="src/assets/img/icons/menu-hamburguerl.webp" alt="Menu" class="header__menu-icon">
                </button>
            </div>
        </div>"""

mobile_menu = """    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu__border">
            <img src="src/assets/img/elements/mobile-menu-border-left.webp" alt="" aria-hidden="true">
        </div>
        <div class="mobile-menu__content">
            <button class="mobile-menu__close" aria-label="Fechar menu" id="mobileMenuClose">
                <img src="src/assets/img/icons/menu-fechar.webp" alt="Fechar">
            </button>
            <nav class="mobile-menu__nav">
                <ul class="mobile-menu__list">
                    <li class="mobile-menu__item"><a href="index.html" class="mobile-menu__link">Início</a></li>
                    <li class="mobile-menu__item"><a href="sobre-nos.html" class="mobile-menu__link">Sobre Nós</a></li>
                    <li class="mobile-menu__item"><a href="solucoes.html" class="mobile-menu__link">Soluções</a></li>
                    <li class="mobile-menu__item"><a href="projetos.html" class="mobile-menu__link">Projetos</a></li>
                    <li class="mobile-menu__item"><a href="contato.html" class="mobile-menu__link">Contato</a></li>
                </ul>
            </nav>
            <a href="contato.html" class="btn-cta mobile-menu__cta"><span class="btn-text">Vamos conversar</span></a>
        </div>
    </div>
"""

def update_files():
    html_files = glob.glob('*.html')
    
    # Regex to find header nav and cta
    header_pattern = re.compile(r'            <nav class="header__nav">.*?</nav>\s*<a href="contato.html" class="btn-cta header__cta">.*?</a>\s*</div>', re.DOTALL)
    
    for file in html_files:
        if file == 'index.html':
            continue
            
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # replace header
        content = header_pattern.sub(header_replacement, content)
        
        # add mobile menu before gsap script
        if '<div class="mobile-menu-overlay"' not in content:
            content = content.replace('    <!-- Animation Libraries (GSAP) -->', mobile_menu + '\n    <!-- Animation Libraries (GSAP) -->')
            content = content.replace('    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>', mobile_menu + '\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>')
            
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
            print(f"Updated {file}")

update_files()
