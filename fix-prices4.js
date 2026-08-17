const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The BYO prices
html = html.replace(/<span class="byo-prices"><span>10.45<\/span><span>13.70<\/span><span>16.95<\/span><span>19.90<\/span><\/span>/g, '<span class="byo-prices pizza-price"><span>10.45</span><span>13.70</span><span>16.95</span><span>19.90</span></span>');
html = html.replace(/<span class="byo-prices"><span>1.55<\/span><span>2.00<\/span><span>2.40<\/span><span>2.80<\/span><\/span>/g, '<span class="byo-prices pizza-price"><span>1.55</span><span>2.00</span><span>2.40</span><span>2.80</span></span>');

fs.writeFileSync('index.html', html);
