const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The BYO sizes header needs styling
html = html.replace(/<span class="pizza-sizes"><span>10"<\/span><span>12"<\/span><span>14"<\/span><span>16"<\/span><\/span>/g, '<span class="pizza-sizes byo-sizes-header"><span>10"</span><span>12"</span><span>14"</span><span>16"</span></span>');

let css = fs.readFileSync('styles.css', 'utf8');
css += `
.byo-sizes-header {
    width: 60%;
}
.byo-sizes {
    display: flex;
    justify-content: flex-end;
}
`;
fs.writeFileSync('styles.css', css);
fs.writeFileSync('index.html', html);
