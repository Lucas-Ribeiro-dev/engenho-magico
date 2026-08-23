import os
import glob
import re

def update_footer():
    html_files = glob.glob('*.html')
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # We want to move <div class="footer__legal"> outside of <div class="footer__container">
        # In current HTML:
        #             </nav>
        #             <div class="footer__legal">
        #                 ...
        #             </div>
        #         </div>
        #     </footer>
        
        # We can replace:
        #             </nav>
        #             <div class="footer__legal">
        # with:
        #             </nav>
        #         </div>
        #         <div class="footer__legal">
        
        # And we need to remove one </div> before </footer>
        
        # Find the block
        pattern = re.compile(r'(</nav>)\s*(<div class="footer__legal">.*?</div>)\s*(</div>)\s*(</footer>)', re.DOTALL)
        
        def replacement(match):
            nav_close = match.group(1)
            footer_legal = match.group(2)
            div_close = match.group(3)
            footer_close = match.group(4)
            
            # Add 'container' class to footer__legal to maintain max-width and padding if needed,
            # or just leave it as footer__legal since it has padding-top and we can add max-width in CSS.
            # Actually, let's keep it just <div class="footer__legal"> and we will style it in CSS.
            return f"{nav_close}\n        </div>\n        {footer_legal}\n    {footer_close}"
            
        new_content = pattern.sub(replacement, content)
        
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file}")

update_footer()
