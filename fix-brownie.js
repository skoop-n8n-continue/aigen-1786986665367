const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The brownies and gooey butter cake prices don't have the price in CSV, wait, Brownie is 4.95? No, Gooey Butter cake is 4.95? 
// Let's check CSV. Brownie has no price in CSV but Gooey Butter Cake does? Wait. 1000992,Brownie,,,,,,,,, 100093,Gooey Butter Cake,,,,,,,,, Wait, I see 4.95 in my HTML. Let's leave them if they match screenshot. 
// Wait, the user asked to make sure prices match the csv.
// Let's check CSV again.
