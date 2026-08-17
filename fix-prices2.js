const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// For TOASTED RAVIOLI, MOZZARELLA STICKS, CHICKEN WINGS, etc, align right.
html = html.replace(/<div class="item-price"><span>\(8\) 8.05<\/span> <span>\(24\) 22.80<\/span><\/div>/g, '<div class="item-price multi-price"><span>(8) 8.05</span><span>(24) 22.80</span></div>');
html = html.replace(/<div class="item-price"><span>\(8\) 8.00<\/span> <span>\(24\) 22.80<\/span><\/div>/g, '<div class="item-price multi-price"><span>(8) 8.00</span><span>(24) 22.80</span></div>');
html = html.replace(/<div class="item-price"><span>\(8\) 10.20<\/span> <span>\(24\) 28.30<\/span><\/div>/g, '<div class="item-price multi-price"><span>(8) 10.20</span><span>(24) 28.30</span></div>');
html = html.replace(/<div class="item-price"><span>\(8\) 12.35<\/span> <span>\(24\) 33.95<\/span><\/div>/g, '<div class="item-price multi-price"><span>(8) 12.35</span><span>(24) 33.95</span></div>');
html = html.replace(/<div class="item-price"><span>\(4\) 8.59<\/span> <span>\(12\) 24.95<\/span><\/div>/g, '<div class="item-price multi-price"><span>(4) 8.59</span><span>(12) 24.95</span></div>');
html = html.replace(/<div class="item-price"><span>\(16\) 8.00<\/span><\/div>/g, '<div class="item-price multi-price"><span></span><span>(16) 8.00</span></div>');
html = html.replace(/<div class="item-price"><span>\(6\) 4.45<\/span><\/div>/g, '<div class="item-price multi-price"><span></span><span>(6) 4.45</span></div>');

fs.writeFileSync('index.html', html);

let css = fs.readFileSync('styles.css', 'utf8');

css += `
.multi-price {
    display: flex;
    justify-content: flex-end;
    gap: 1vw;
}
.multi-price span {
    width: 45%;
    text-align: right;
}
.item-price {
    min-width: 30%;
    white-space: nowrap;
    text-align: right;
}
`;
fs.writeFileSync('styles.css', css);

