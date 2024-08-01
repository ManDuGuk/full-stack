const path = require('path');
const string = __filename;
console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(string));
console.log(path.extname(string));
console.log(path.basename(string));


const pathObj = path.parse(string)
console.log(pathObj);

const fullpath = path.join("c:", "a", "b", "xxx.jpg")
console.log(fullpath);


const fullpath2 = path.join("c:", "a", "/b", "xxx.jpg")
console.log(fullpath2);
fullpath2 = path.resolve("c:", "a", "/b", "xxx.jpg")
console.log(fullpath2);