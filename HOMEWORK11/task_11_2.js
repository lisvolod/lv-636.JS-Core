// підключаємо модуль http
const http = require("http");

//підключаємо модуль os для визначення імені поточного користувача системи
const os = require("os");

//підключаємо власний створений модуль
const greeeting = require("./personalmodule")

// отримуємо ім'я поточного користувача
let userName = os.userInfo().username;

http.createServer(function(request,response){
     
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.write(`<p>Date of request: ${greeeting.date}</p>`);
    response.end(`<p>${greeeting.showMessage(userName)}</p>`);
  
     
}).listen(5000, "127.0.0.1",function(){
    console.log("Server started listening for requests on the port 5000");
});

