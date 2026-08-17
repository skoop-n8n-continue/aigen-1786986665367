const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The cauliflower crust needs alignment
html = html.replace(/<span class="byo-prices">\+3\.00<\/span>/g, '<span class="byo-prices pizza-price" style="justify-content: flex-end;"><span></span><span></span><span></span><span>+3.00</span></span>');

fs.writeFileSync('index.html', html);
