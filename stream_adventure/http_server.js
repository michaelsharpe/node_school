var http = require("http")
var through = require("through")
var tr = through(write, end);
var port = process.argv[2];

var server = http.createServer(function(request, response){
  if(request.method === "POST"){
    request.pipe(through(write, end)).pipe(response)
  }
})

function write(buf) {
  var line = buf.toString().toUpperCase();
  this.queue(line);
}

function end(){
  this.queue(null)
}

server.listen(port)