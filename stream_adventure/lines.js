var through = require("through");
var split = require("split");

var counter = 0;
process.stdin
  .pipe(split())
  .pipe(through(function(line){
    counter++;
    if(counter % 2 === 0){
      var line = line.toString().toUpperCase();
    } else {
      var line = line.toString().toLowerCase();
    }
    this.queue(line + "\n")
    }
  )).pipe(process.stdout)

