const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace('.item-price {', '.item-price {\n    min-width: 30%;\n    white-space: nowrap;');
fs.writeFileSync('styles.css', css);
