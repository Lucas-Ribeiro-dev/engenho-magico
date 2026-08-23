import os
import re

# We will read index.html and projetos.html, which were just restored to their last commit state.
# We have the HTML blocks from earlier in our context.

steps_and_catalog = """
        <section class="steps">
            <div class="steps__container">
                <h2 class="steps__title">As 5 Etapas do Processo</h2>
                <ol class="steps__list">
                    <li class="step">
                        <div class="step__number">1</div>
                        <div class="step__content">
                            <h3 class="step__name"> Entendimento do Objetivo</h3>
                            <p class="step__description">Antes de esboçar cenários, investigamos a fundo o propósito do
                                projeto. Queremos ensinar um conteúdo, engajar uma equipe, atrair famílias ou fortalecer
                                uma marca? O norte estratégico dita toda a criação.</p>
                        </div>
                    </li>
                    <li class="step">
                        <div class="step__number">2</div>
                        <div class="step__content">
                            <h3 class="step__name"> Desenho da Jornada</h3>
                            <p class="step__description">Estruturamos a experiência com começo, conflito, missões,
                                descobertas e resolução. Definimos o papel do participante e as mecânicas de interação.
                                Tudo tem uma função clara; nada entra apenas por estética.</p>
                        </div>
                    </li>
                    <li class="step">
                        <div class="step__number">3</div>
                        <div class="step__content">
                            <h3 class="step__name"> Storytelling e Universo Visual</h3>
                            <p class="step__description">A narrativa é o motor da experiência. Desenvolvemos a
                                identidade
                                visual, as histórias, personagens, dossiês, mapas e objetos táteis (caixas narrativas)
                                que transportam o público para o universo do projeto.</p>
                        </div>
                    </li>
                    <li class="step">
                        <div class="step__number">4</div>
                        <div class="step__content">
                            <h3 class="step__name"> Planejamento Operacional</h3>
                            <p class="step__description">Uma ideia só é boa se funcionar na prática. Planejamos
                                minuciosamente o fluxo de público, tempos e movimentos, necessidades de equipe,
                                segurança, manutenção e a lógica de escalabilidade.</p>
                        </div>
                    </li>
                    <li class="step">
                        <div class="step__number">5</div>
                        <div class="step__content">
                            <h3 class="step__name"> Implantação e Evolução Constante</h3>
                            <p class="step__description">Projetos podem nascer como pilotos (MVPs) ou versões compactas.
                                A partir de testes reais, refinamos a operação, ajustamos os desafios e evoluímos a
                                experiência para garantir máximo impacto com menor risco.</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>

        <section class="catalog">
            <div class="catalog__container">
                <h2 class="catalog__title">Catálogo de Formatos</h2>
                <p class="catalog__subtitle">Conheça as possibilidades visuais de entregas que podemos adaptar para o
                    seu projeto.</p>
                <div class="catalog-interactive" id="catalogInteractive" tabindex="0">
                    
                    <div class="catalog-interactive__media">
                        <div class="catalog-interactive__images">
                            <img src="src/assets/img/placeholder.png" alt="Labirinto temático interativo" class="catalog-interactive__img active">
                            <img src="src/assets/img/placeholder.png" alt="Arena de missões e desafios" class="catalog-interactive__img">
                            <img src="src/assets/img/placeholder.png" alt="Jogos de investigação de mesa" class="catalog-interactive__img">
                            <img src="src/assets/img/placeholder.png" alt="Mapa de caça ao tesouro" class="catalog-interactive__img">
                            <img src="src/assets/img/placeholder.png" alt="Salas imersivas e temáticas" class="catalog-interactive__img">
                            <img src="src/assets/img/placeholder.png" alt="Circuitos de aventura ao ar livre" class="catalog-interactive__img">
                            <img src="src/assets/img/placeholder.png" alt="Kits pedagógicos em caixas" class="catalog-interactive__img">
                            <img src="src/assets/img/placeholder.png" alt="Dossiês, cartas e mapas antigos" class="catalog-interactive__img">
                        </div>
                        <div class="catalog-interactive__overlay"></div>
                        
                        <!-- Mobile titles / counters will position over this media container -->
                        <div class="catalog-interactive__mobile-top">
                            <div class="catalog-interactive__mobile-title" id="catalogMobileTitle">Labirintos temáticos</div>
                            <div class="catalog-interactive__counter">
                                <span id="catalogCurrentMob">1</span><span class="catalog-interactive__counter-divider">/</span>8
                            </div>
                        </div>

                        <div class="catalog-interactive__controls">
                            <button class="catalog-interactive__arrow catalog-interactive__arrow--prev" aria-label="Anterior">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button class="catalog-interactive__arrow catalog-interactive__arrow--next" aria-label="Próximo">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    <div class="catalog-interactive__content">
                        <div class="catalog-interactive__nav-wrapper">
                            <ul class="catalog-interactive__nav" id="catalogNav">
                                <li class="catalog-interactive__nav-item active" data-index="0">Labirintos temáticos</li>
                                <li class="catalog-interactive__nav-item" data-index="1">Arenas de missão</li>
                                <li class="catalog-interactive__nav-item" data-index="2">Jogos investigativos</li>
                                <li class="catalog-interactive__nav-item" data-index="3">Caças ao tesouro</li>
                                <li class="catalog-interactive__nav-item" data-index="4">Salas imersivas</li>
                                <li class="catalog-interactive__nav-item" data-index="5">Circuitos de aventura</li>
                                <li class="catalog-interactive__nav-item" data-index="6">Kits pedagógicos narrativos</li>
                                <li class="catalog-interactive__nav-item" data-index="7">Dossiês, mapas e pistas</li>
                            </ul>
                        </div>
                        
                        <div class="catalog-interactive__details">
                            <div class="catalog-interactive__counter catalog-interactive__counter--desktop">
                                <span id="catalogCurrent">1</span><span class="catalog-interactive__counter-divider">/</span>8
                            </div>
                            <div class="catalog-interactive__descriptions">
                                <p class="catalog-interactive__desc active">Percursos imersivos cheios de mistérios, onde cada curva revela um novo enigma a ser desvendado.</p>
                                <p class="catalog-interactive__desc">Grandes espaços cenográficos projetados para equipes colaborarem e superarem desafios físicos e mentais.</p>
                                <p class="catalog-interactive__desc">Experiências focadas em raciocínio lógico e dedução, onde os participantes assumem o papel de detetives.</p>
                                <p class="catalog-interactive__desc">Jornadas dinâmicas guiadas por pistas espalhadas pelo ambiente, ideais para exploração e descobertas.</p>
                                <p class="catalog-interactive__desc">Ambientes totalmente tematizados que transportam o público para outra realidade através de narrativa e cenografia.</p>
                                <p class="catalog-interactive__desc">Trilhas ao ar livre que combinam atividades físicas com elementos de história e interação com a natureza.</p>
                                <p class="catalog-interactive__desc">Caixas contendo materiais educativos e lúdicos que transformam o aprendizado em uma verdadeira missão.</p>
                                <p class="catalog-interactive__desc">Materiais impressos com acabamento realista que servem de base para desvendar tramas complexas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

new_hero = """
        <section class="page-hero">
            <div class="page-hero__content parallax-layer-hero parallax-layer-hero--text" data-speed="0.25">
                <h1 class="page-hero__title">Projetos</h1>
                <p class="page-hero__subtitle">Apresentamos aqui uma seleção de experiências imersivas desenvolvidas pela Engenho Mágico.</p>
            </div>
            <div class="parallax-hero_content">
                <img src="src/assets/img/parallax-hero/parallax-bg-terra.png" alt=""
                    class="parallax-layer-hero parallax-layer-hero--bg" data-speed="0.08">

            
                <!-- INÍCIO: Elementos Flutuantes -->
                <img src="src/assets/img/parallax-hero/hero-float-terra-2.png" alt=""
                    class="parallax-layer-hero parallax-layer-hero--float-2-terra hero-floating-item" data-speed="0.725">
                <img src="src/assets/img/parallax-hero/hero-float-terra-1.png" alt=""
                    class="parallax-layer-hero parallax-layer-hero--float-1-terra hero-floating-item" data-speed="0.925">
                <!-- FIM: Elementos Flutuantes -->
            </div>
        </section>
"""

def update_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Insert before <section class="cta-section">
    content = content.replace('        <section class="cta-section">', steps_and_catalog + '\n        <section class="cta-section">')
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

def update_projetos():
    with open('projetos.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace old hero
    # Find from <section class="projetos-hero"> to the end of the <div class="hero-divider">...</div>
    pattern = r'        <section class="projetos-hero">.*?</section>\s*<div class="hero-divider">.*?</div>'
    content = re.sub(pattern, new_hero.strip(), content, flags=re.DOTALL)
    
    with open('projetos.html', 'w', encoding='utf-8') as f:
        f.write(content)

def remove_links():
    import glob
    html_files = glob.glob('*.html')
    for file in html_files:
        if file == 'metodologia.html':
            continue
        with open(file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = []
        for line in lines:
            if 'metodologia.html' in line:
                if 'btn-cta' in line and file == 'index.html':
                    pass # We will remove the button completely, or change its link? The prompt said "revise os códigos CSS e js para verificar se vai ficar código sobrando". Let's remove the link line completely.
                else:
                    continue # Skip this line to delete it
            else:
                # Also handle multi-line anchor tags if any
                new_lines.append(line)
                
        with open(file, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

update_index()
update_projetos()
remove_links()

if os.path.exists('metodologia.html'):
    os.remove('metodologia.html')
