import re

with open('index.html', 'r') as f:
    html = f.read()

# Find byo-box and move it out of col-mid-top
# It's currently right after the Pizzas section-box end (around line 219)
byo_match = re.search(r'(\s*<div class="byo-box.*?</div>\s*</div>\s*</div>)', html, re.DOTALL)
if byo_match:
    byo_html = byo_match.group(1)
    
    # Remove from original location
    html = html.replace(byo_html, '')
    
    # Insert it right before Page 2 (which is after Col 3 ends)
    # The end of page 1 is:
    # </div> (col-right-top)
    # </div> (grid-layout-p1)
    # </div> (page1)
    
    insert_str = f'\n          <!-- BYO Spanning 2 columns -->\n          <div class="byo-container" style="grid-row: 2 / 3; grid-column: 2 / 4; align-self: start;">{byo_html}\n          </div>\n        </div>\n      </div>\n\n      <!-- PAGE 2 -->'
    
    html = re.sub(r'\s*</div>\s*</div>\s*<!-- PAGE 2 -->', insert_str, html)
    
    with open('index.html', 'w') as f:
        f.write(html)
    print("Updated BYO placement!")
else:
    print("Could not find BYO box")
