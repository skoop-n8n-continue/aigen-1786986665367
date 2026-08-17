const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The formatting fix here focuses on aspect ratio by ensuring proper flex distribution
// And we want to check any missing/incorrect prices against the CSV
console.log("Checking price replacements...");
