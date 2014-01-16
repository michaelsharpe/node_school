var net = require("net");
var port = process.argv[2];

function makeDate(){
  var date = new Date();
  var year = zeroFill(date.getFullYear());
  var month = zeroFill(date.getMonth() + 1);
  var day = zeroFill(date.getDate());
  var hours = zeroFill(date.getHours());
  var minutes = zeroFill(date.getMinutes());
  var date_string = year + "-" + month + "-" + day + " " + hours + ":" + minutes;

  return date_string;
}

function zeroFill(i){
  return (i < 10 ? "0" : "") + i
}

var server = net.createServer(function(socket){
  var now = makeDate();
  socket.end(now + "\n");
})

server.listen(port);

