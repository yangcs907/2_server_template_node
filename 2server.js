var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;


function handleRequest1(req, res) {
    res.end("You are awesome!  " + req.url);
};

function handleRequest2(req, res) {
  res.end("You are bad! " + req.url);
};

var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
  console.log("Server is listening on " + PORT1);
});

server2.listen(PORT2, function() {
  console.log("Server is listening on " + PORT2);
});
