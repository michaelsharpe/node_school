var http = require("http");
var fs = require("fs")
var port = process.argv[2];
var file = process.argv[3];
var stream = fs.createReadStream(file);

var server = http.createServer(function(request, response){
  stream.pipe(response)
})

server.listen(port);