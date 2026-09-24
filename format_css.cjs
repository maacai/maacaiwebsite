const fs = require('fs');
const css = fs.readFileSync('src/styles/global.css', 'utf8');
const lines = css.split('\n').filter(l => l.trim().length > 0);
const minified = lines[lines.length - 1];
const formatted = minified.replace(/}/g, '}\n').replace(/{/g, ' {\n  ').replace(/;/g, ';\n  ');
fs.writeFileSync('formatted.css', formatted);
console.log('Formatted CSS written to formatted.css');
