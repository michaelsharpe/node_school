
var results = process.argv;
var answer = 0;
for(i=2; i < results.length; i++){
  var num = parseInt(results[i])
  answer += num
}
console.log(answer)