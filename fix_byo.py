import re
with open('styles.css', 'r') as f:
    css = f.read()

# I noticed .center-price .byo-title-col in the grep output. I think my regex accidentally replaced .byo-box with .center-price somehow. Let's fix it.
css = css.replace('.center-price .byo-title-col {', '.byo-title-col {')
# Actually, the original css had .byo-box
if '.byo-box {' not in css:
    css += "\n.byo-box { width: 100%; display: flex; }"

# Also multi-price should be aligned right
css = re.sub(r'(\.multi-price\s*\{.*?)\}', r'\1 justify-content: flex-end; }', css, flags=re.DOTALL)

with open('styles.css', 'w') as f:
    f.write(css)
