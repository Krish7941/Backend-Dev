const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error('Error reading file:', err);
    }

    const words = data.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    fs.writeFile('output.txt', `Word Count: ${wordCount}`, (err) => {
        if (err) {
            return console.error('Error writing file:', err);
        }
        console.log('Word count written to output.txt');
    });
});
