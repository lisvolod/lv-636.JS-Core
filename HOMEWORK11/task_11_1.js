// підключаємо модуль http
const http = require("http");

// підключаємо модуль os
const os = require("os");

// підключаємо модуль path
const path = require("path")

let userName = os.userInfo().username;
let osName = os.type();
let osUpTime = os.uptime();
let currentDirectory = path.dirname(__dirname);
let currentFileName = path.basename(__filename)

http.createServer(function(request,response){
     
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.write("<h2>System information</h2>\n");
    response.write(`<p>Current user name: ${userName}</p>`);
    response.write(`<p>OS type: ${osName}</p>`);
    response.write(`<p>System work time: ${osUpTime/60} minutes</p>\n`);
    response.write(`<p>Current work directory: ${currentDirectory}</p>`);
    response.end(`<p>Server file name: ${currentFileName}</p>`);
     
}).listen(5000, "127.0.0.1",function(){
    console.log("Server started listening for requests on the port 5000");
});