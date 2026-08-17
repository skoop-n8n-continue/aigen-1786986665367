const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css += `
.byo-prices.pizza-price {
    width: 60%;
}
.byo-name {
    width: 40%;
}
`;
fs.writeFileSync('styles.css', css);
