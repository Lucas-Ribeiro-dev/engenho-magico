# Especificação de Design System (docs/design-system.md)

## 1. Visão Geral e Conceito Visual
Este documento estabelece a especificação técnica de design system para o projeto **Engenho Mágico**, servindo como guia único de implementação visual para garantir consistência, clareza e fidelidade ao posicionamento da marca.

* **Conceito Norteador:** Lúdico Estratégico & Imersão Clean.
* **Diretrizes de Interface:**
  * Layout despoluído com alto aproveitamento de espaço em branco (*whitespace*).
  * Ausência total de elementos visuais poluídos ou sobrecarregados.
  * Hierarquia tipográfica estrita e semântica.
  * Uso cirúrgico das cores elementares apenas para acentos, ações e destaques contextuais, sobre uma base neutra e legível.

---

## 2. Inventário Visual Detalhado (Extraído dos Prints de Referência)

### 2.1. Componente Hero - Cartão Ativo (Posição 0)
* **Geometria e Superfície:**
  * Cartão retangular amplo com cantos arredondados suavizados (`var(--raio-grande)` / 24px).
  * Fundo preenchido em branco puro (`var(--cor-fundo-superficie)`).
  * Sombreamento projetado suave de alta elevação (`var(--sombra-forte)`).
* **Composição Interna (Split Layout em Duas Colunas):**
  * **Coluna Esquerda (Textual):**
    * Tag / Subtítulo de chamada em tipografia arredondada (`var(--fonte-segunda)` / Fredoka).
    * Título do Serviço / Solução com escala fluida.
    * Parágrafo explicativo sucinto de alta legibilidade (`var(--fonte-terceira)` / Nunito).
    * Botão de Ação Primário com preenchimento em cor elementar e cantos arredondados.
  * **Coluna Direita (Mídia):**
    * Frame de imagem com bordas arredondadas acompanhando o raio do cartão.
* **Rodapé Interno do Cartão:**
  * Posicionado no canto inferior esquerdo/base do cartão ativo.
  * **Numerador Dinâmico:** Indicador em formato fracionário (exemplo: "01/04").
  * **Grupo de Controles:** Botões em formato pílula/circular com setas de navegação.

### 2.2. Componente Hero - Cartões Standby (Posições 1, 2, 3)
* **Arranjo e Empilhamento:**
  * Cartões agrupados lateralmente à direita do cartão ativo.
  * Exposição visível de cerca de 5% de largura útil por cartão na pilha standby (somando ~15% no total).
* **Identificação Elementar:**
  * Borda ou acento sutil mapeado para cada um dos quatro elementos (Fogo, Ar, Água e Terra).
* **Tratamento de Profundidade:**
  * Redução progressiva de escala (`transform: scale()`), deslocamento horizontal (`translateX`) e diminuição de opacidade (`opacity`) conforme a distância do cartão frontal.

---

## 3. Diretrizes de Aplicação Tipográfica

1. **Fonte Primeira (`'Luckiest Guy', cursive`):**
   * **Aplicação:** Exclusiva para a marca/logo no cabeçalho e o título principal de alto impacto no Hero.
   * **Restrição:** Estritamente proibido o uso em corpos de texto, botões ou componentes densos.
2. **Fonte Segunda (`'Fredoka', sans-serif`):**
   * **Aplicação:** Títulos de seções (`H2`), títulos dos cartões (`H3`), subtítulos/tags de contexto e numerações fracionárias de slides ("01/04").
   * **Caráter:** Arredondada, amigável, legível e moderna.
3. **Fonte Terceira (`'Nunito', sans-serif`):**
   * **Aplicação:** Corpo de parágrafos, descrições de serviços, itens de lista, botões de ação, formulários e elementos gerais de interface.
   * **Caráter:** Humanista, focada em conforto de leitura contínua.

---

## 4. Arquitetura de Mapeamento BEM (Nomenclatura em Português)

Todas as classes do projeto devem seguir rigorosamente o padrão BEM com termos em português:

* `.heroi`: Bloco principal da seção inicial.
* `.heroi__conteiner`: Limitador centralizado de largura útil.
* `.heroi__carrossel`: Area de agrupamento do carrossel empilhado.
* `.cartao-slide`: Componente base de cartão individual.
  * **Modificadores de Estado (Atributos):** `data-posicao="0"`, `data-posicao="1"`, `data-posicao="2"`, `data-posicao="3"`.
  * **Modificadores Temáticos:** `.cartao-slide--fogo`, `.cartao-slide--ar`, `.cartao-slide--agua`, `.cartao-slide--terra`.
* `.cartao-slide__corpo`: Layout split interno (textos e mídia).
* `.cartao-slide__informacoes`: Coluna textual do cartão.
* `.cartao-slide__subtitulo`: Tag/subtítulo em fonte Fredoka.
* `.cartao-slide__titulo`: Título do serviço/solução.
* `.cartao-slide__descricao`: Texto explicativo sucinto.
* `.cartao-slide__midia`: Frame e contêiner para imagem.
* `.cartao-slide__rodape`: Barra inferior interna exclusiva do cartão ativo.
* `.cartao-slide__numerador`: Indicador fracionário ("01/04").
* `.cartao-slide__controles`: Agrupador dos botões de navegação.
* `.botao`: Estrutura base de botão.
* `.botao--fogo`: Botão com preenchimento na cor elementar Fogo.

---

## 5. Regras Anti-Poluição Visual (Checklist Clean)

1. **Espaço em Branco (*Whitespace*):** Respeitar rigorosamente os respiros entre blocos e cartões, mantendo margens confortáveis sem acavalar elementos.
2. **Limite de Acentuação de Cor:** Cada seção deve utilizar o fundo neutro, texto escuro de alto contraste e no máximo 1 cor de acento elementar como destaque principal.
3. **Sem Elementos Gráficos Concorrentes:** A clareza da mensagem e a tipografia devem ter prioridade total sobre ícones decorativos secundários.
4. **Fidelidade aos Tokens Existentes:** Nenhuma cor, fonte ou espaçamento deve ser introduzido fora das variáveis globais já registradas no `:root` do projeto.
