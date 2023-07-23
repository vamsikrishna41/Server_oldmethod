var http= require('http');
var imp = require('./second_module.js');
http.createServer(function(rep,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(imp.msg());
    res.end();
}).listen(8080);
