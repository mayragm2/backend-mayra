const fs = require('node:fs');

try {
    
    const text = "Saving my first Node.js file";
    fs.writeFileSync('saludo.txt', text, 'utf8');

    console.log ('File written successfully');
} catch (error) {

    console.log (`Error saving file ${error}`);
    
}