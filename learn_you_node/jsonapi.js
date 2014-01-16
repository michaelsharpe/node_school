var http = require("http");
var url = require("url");

var port = process.argv[2]

var server = http.createServer(function(request, response){
  response.writeHead(200);
  var req_url = url.parse(request.url, true);

  if(req_url.pathname == "/api/parsetime") {
    var json_date = jsonDate(req_url.query.iso)
    response.write(json_date);
    response.end();
  }

  if(req_url.pathname == "/api/unixtime"){
    var date = new Date(req_url.query.iso)
    var unix_time = Math.round(date.getTime());
    var json_unix_time = JSON.stringify({"unixtime": unix_time})
    response.write(json_unix_time);
    response.end()
  }
})

server.listen(port);

function zeroFill(i){
  return (i < 10 ? "0" : "") + i
}

function jsonDate(iso_date){
  var date = new Date(iso_date);
  var hour = zeroFill(date.getHours())
  var minute = zeroFill(date.getMinutes())
  var second = zeroFill(date.getSeconds())
  var json_date = JSON.stringify({"hour": parseInt(hour), "minute": parseInt(minute), "second": parseInt(second)})
  return json_date
}
