var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  var lines = data.toString().split("\n");
  if(err) throw err;
  console.log(lines.length - 1)
})
