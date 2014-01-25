var crypto = require("crypto");
var tar = require("tar");
var through = require("through");
var zlib = require("zlib");

var parser = tar.Parse();
parser.on("entry", function (e){
  if (e.type !== "File") return;

  var hash = crypto.createHash("md5", { encoding: "hex"} );
  e.pipe(hash).pipe(through(null, end)).pipe(process.stdout);

  function end() { this.queue(" " + e.path + "\n") }
})

var cipher = process.argv[2];
var password = process.argv[3];

process.stdin
  .pipe(crypto.createDecipher(cipher, password))
  .pipe(zlib.createGunzip())
  .pipe(parser)