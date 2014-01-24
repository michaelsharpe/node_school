var duplex = require("duplexer");
var through = require("through");

module.exports = function(counter) {
  var counts = {};
  var input = through(write, end);
  return duplex(input, counter);

  function write (data){
    counts[data.country] = (counts[data.country] || 0) + 1
  }

  function end (){
    counter.setCounts(counts)
  }
}
