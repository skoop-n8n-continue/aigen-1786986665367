const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The add chicken prices 
html = html.replace(/<div class="ac-row"><span>GRILLED<\/span><span>1\.00<\/span><span>2\.00<\/span><\/div>/g, '<div class="ac-row"><span>GRILLED</span><span class="ac-prices-right"><span>1.00</span><span>2.00</span></span></div>');
html = html.replace(/<div class="ac-row"><span>CRISPY<\/span><span>1\.50<\/span><span>3\.00<\/span><\/div>/g, '<div class="ac-row"><span>CRISPY</span><span class="ac-prices-right"><span>1.50</span><span>3.00</span></span></div>');

let css = fs.readFileSync('styles.css', 'utf8');
css += `
.ac-prices-right {
    display: flex;
    justify-content: flex-end;
    gap: 1vw;
    width: 60%;
}
.ac-prices-right span {
    width: 45%;
    text-align: right;
}
.ac-row > span:first-child {
    width: 40%;
}
`;
fs.writeFileSync('styles.css', css);
fs.writeFileSync('index.html', html);
