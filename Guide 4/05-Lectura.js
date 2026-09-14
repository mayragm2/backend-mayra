const fs = require('node:fs');

try {
    const text = fs.readFileSync('saludo.txt', 'utf8');
    console.log (text);
    console.log (text.length)
} catch (error) {
    console.log (`Error saving file ${error}`);
}

