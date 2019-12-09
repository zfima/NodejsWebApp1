// import library 'http'
var http = require('http')
// import library './DateModule', which in same directory
var dt = require('./DateTime')
// import library 'url'
var url = require('url')

//create an HTTP server
http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.write("\n\r");
    res.write(req.url.substring(1, req.url.length));
    res.write("\n\r");
    res.write("The date and time are currently: " + dt.myDateTime());
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write("\n\r");
    res.write(txt);
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080