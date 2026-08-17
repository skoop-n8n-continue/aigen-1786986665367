const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// I need to align the single prices.
html = html.replace(/<div class="item-price"><span>([0-9.]+)<\/span><\/div>/g, '<div class="item-price"><span>$1</span></div>');

// The pizza sizes header wasn't perfectly aligned, let's fix it by adding proper css classes and making the structure rigid
let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace('.pizza-sizes {', '.pizza-sizes { display: flex; justify-content: space-between; gap: 0.5vw;');
css = css.replace('.pizza-price {', '.pizza-price { display: flex; justify-content: space-between; gap: 0.5vw; text-align: right;');

css += `
.pizza-sizes span, .pizza-price span {
    width: 25%;
    text-align: right;
}
`;
fs.writeFileSync('styles.css', css);

html = html.replace(/10" \| 12" \| 14" \| 16"/g, '<span>10"</span><span>12"</span><span>14"</span><span>16"</span>');
html = html.replace(/14\.20 \| 18\.85 \| 23\.05 \| 27\.05/g, '<span>14.20</span><span>18.85</span><span>23.05</span><span>27.05</span>');
html = html.replace(/13\.99 \| 17\.99 \| 21\.99 \| 25\.99/g, '<span>13.99</span><span>17.99</span><span>21.99</span><span>25.99</span>');
html = html.replace(/14\.20 \| 18\.80 \| 23\.05 \| 27\.05/g, '<span>14.20</span><span>18.80</span><span>23.05</span><span>27.05</span>');
html = html.replace(/11\.90 \| 15\.70 \| 19\.40 \| 22\.70/g, '<span>11.90</span><span>15.70</span><span>19.40</span><span>22.70</span>');
html = html.replace(/10\.45 \| 13\.70 \| 16\.95 \| 19\.90/g, '<span>10.45</span><span>13.70</span><span>16.95</span><span>19.90</span>');
html = html.replace(/1\.55 \| 2\.00 \| 2\.40 \| 2\.80/g, '<span>1.55</span><span>2.00</span><span>2.40</span><span>2.80</span>');

// Salad sizes 
css += `
.salad-price { display: flex; justify-content: flex-end; gap: 1vw; }
.salad-price span { width: 45%; text-align: right; }
.salad-header span:last-child { display: flex; justify-content: flex-end; gap: 1vw; }
.salad-header span:last-child span { width: 45%; text-align: right; }
`;
fs.writeFileSync('styles.css', css);
html = html.replace(/HALF \| WHOLE/g, '<span>HALF</span><span>WHOLE</span>');
html = html.replace(/4\.45 \| 6\.55/g, '<span>4.45</span><span>6.55</span>');
html = html.replace(/6\.25 \| 9\.40/g, '<span>6.25</span><span>9.40</span>');
html = html.replace(/4\.95 \| 7\.30/g, '<span>4.95</span><span>7.30</span>');
html = html.replace(/5\.20 \| 8\.35/g, '<span>5.20</span><span>8.35</span>');


fs.writeFileSync('index.html', html);

