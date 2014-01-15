var http = require("http");
var bl = require("bl");
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var url1_content = ""
var url2_content = ""
var url3_content = ""

http.get(url1, function(response){
  response.pipe( bl(function(err, data){
    url1_content = data.toString();
  }))
  response.on("end", function(){
    http.get(url2, function(response){
      response.pipe( bl(function(err, data){
        url2_content = data.toString();
      }))
      response.on("end", function(){
        http.get(url3, function(response){
          response.pipe( bl(function(err, data){
            url3_content = data.toString();
          }))
          response.on("end", function(){
            console.log(url1_content);
            console.log(url2_content);
            console.log(url3_content);
          })
        })
      })
    })
  })
})
