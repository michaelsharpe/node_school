var crypto = require("crypto");
var password = process.argv[2];

var stream = crypto.createDecipher("aes256", password);

process.stdin.pipe(stream).pipe(process.stdout);