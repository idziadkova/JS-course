var arr = ["text/plain","application/json","text/html","application/rainbows+unicorns"];

function readStreamAsString(stream, callback) {
  var data = "";
  stream.on("data", function(chunk) {
    data += chunk.toString();
  });
  stream.on("end", function() {
    callback(null, data);
  });
  stream.on("error", function(error) {
    callback(error);
  });
};
var ca = function ca(e, d){
	if (e) {	console.log(q)}
	else console.log(d);
};


arr.forEach( function (elem) {
var http=require("http");
var request = http.request({
	hostname: "eloquentjavascript.net",
	path: "/author",
	method: "GET",
	headers :{Accept: elem}
},
function (response) { console.log("Server responsed with code ", response.statusCode);

readStreamAsString(response,ca);
});
request.end();
});