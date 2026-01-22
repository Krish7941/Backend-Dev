const fs = require('fs')
const path = require('path')

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }
  console.log('File content:', data)
});

fs.writeFile('output.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error writing file:', err)
    return
  }
    console.log('File written successfully')
});

fs.appendFile('output.txt', '\nAppended content.', (err) => {
  if (err) {
    console.error('Error appending file:', err)
    return
  }
    console.log('File appended successfully')
});

fs.copyFile('example.txt', 'example_copy.txt', (err) => {
  if (err) {
    console.error('Error copying file:', err)
    return
  }
    console.log('File copied successfully')
});

fs.unlink('output.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err)
    return
  }
    console.log('File deleted successfully')
});

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)
    return
  }
    console.log('Directory contents:', files)
});


