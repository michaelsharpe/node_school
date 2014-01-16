var list_dir = require("./list_dir.js");

var dir = process.argv[2];
var ext = process.argv[3];

list_dir(dir, ext, function(err, list){
  if (err) {
    return console.log("There was an error:", err)
  }
  list.forEach(function(file){
    console.log(file);
  })
})
