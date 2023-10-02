const path = require('path');
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base, 'hi');

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
//our app will run in different, so path will be different in machine than in heroku.
console.log(absolute);
