var fs = require('fs');
var file_path = process.argv[2];
var file = fs.readFileSync(file_path).toString();
var split_file = file.split("\n");

console.log(split_file.length - 1)