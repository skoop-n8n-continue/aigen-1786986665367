import re

with open('styles.css', 'r') as f:
    css = f.read()

# Update grid-layout-p1 to have 2 rows
css = re.sub(r'(\.grid-layout-p1\s*\{[^}]*grid-template-rows:)\s*1fr;', r'\1 auto 1fr;', css)

# Replace menu-item CSS
menu_item_css = """
.menu-item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  margin-bottom: 0.9vw;
}
.item-main {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  gap: 0.5vw;
}
.item-desc {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  font-size: 0.75vw;
  color: #666;
  margin-top: 0.1vw;
  line-height: 1.2;
}
.item-price {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  font-weight: 700;
  font-size: 0.95vw;
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
"""

css = re.sub(r'\.menu-item\s*\{.*?\}(?=\n\n|\n\.item-main)', '', css, flags=re.DOTALL)
css = re.sub(r'\.item-main\s*\{.*?\}(?=\n\n|\n\.item-name)', '', css, flags=re.DOTALL)
css = re.sub(r'\.item-desc\s*\{.*?\}(?=\n\n|\n\.item-price)', '', css, flags=re.DOTALL)
css = re.sub(r'\.item-price\s*\{.*?\}(?=\n\n|\n\.item-subtitle)', '', css, flags=re.DOTALL)

# Find where to insert it (after .section-content)
css = css.replace('.section-content {', menu_item_css + '\n.section-content {')

# Remove center-price
css = re.sub(r'\.center-price\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.center-price \.item-price\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.center-price \.item-desc\s*\{.*?\}', '', css, flags=re.DOTALL)


# Update pizza-item
pizza_override = """
/* Pizza Items */
.pizza-item {
  grid-template-columns: 40% 60%;
}
.pizza-price {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 0.5vw;
  margin-top: 0 !important; /* override pull up */
}
.pizza-item .item-desc {
  padding-right: 1vw;
}
"""
css = re.sub(r'\.pizza-item\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.pizza-price\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.pizza-price span\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.pizza-item \.item-desc\s*\{.*?\}', '', css, flags=re.DOTALL)

# Update salad-item
salad_override = """
/* Salad Items */
.salad-item {
  grid-template-columns: 55% 45%;
}
.salad-price {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0 !important; /* override pull up */
}
.salad-item .item-desc {
  padding-right: 1vw;
}
"""
css = re.sub(r'\.salad-item\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.salad-price\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.salad-price span\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.salad-item\.single-line \.salad-price\s*\{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.salad-item \.item-desc\s*\{.*?\}', '', css, flags=re.DOTALL)


# Insert overrides at the end
css += "\n" + pizza_override + "\n" + salad_override

with open('styles.css', 'w') as f:
    f.write(css)

