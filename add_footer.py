import glob
import os

files = glob.glob('*.html')

insertion = '''            <div class="footer__contact-col">
                <h3 class="footer__link" style="margin-bottom: var(--space-sm); display: block;">Contato</h3>
                <p class="footer__rights" style="margin-bottom: var(--space-sm);">WhatsApp</p>
                <a href="https://wa.me/5561991947972" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                    <img src="src/assets/img/icons/wpp-icon.webp" alt="WhatsApp Icon" style="width: 24px; height: 24px; object-fit: contain;">
                    <span class="footer__link" style="font-size: var(--font-size-sm);">(61) 99194-7972</span>
                </a>
            </div>'''

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '</nav>' in content and 'footer__container' in content:
        if 'footer__contact-col' not in content:
            # We replace '</nav>' followed by closing divs
            content = content.replace('            </nav>\n        </div>\n\n        <div class="footer__legal">', 
                                      '            </nav>\n' + insertion + '\n        </div>\n\n        <div class="footer__legal">')
            
            # For some files the indentation might be slightly different
            content = content.replace('            </nav>\n        </div>\n        <div class="footer__legal">', 
                                      '            </nav>\n' + insertion + '\n        </div>\n        <div class="footer__legal">')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
