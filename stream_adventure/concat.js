var concat = require("concat-stream");

process.stdin.pipe(concat(function(data){
  var string = data.toString().split("").reverse().join("") + "\n";
  process.stdout.write(string)
}))