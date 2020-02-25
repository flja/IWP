const http = require("http");
const fs = require("fs");

let server = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type': 'application/json")
    response.writeHead(200);
    
    if(request.url == "/log")
    {
        let body = [];
  
        request.on('data', (chunk) => {
        body.push(chunk);
        }).on('end', () => {
        body = Buffer.concat(body).toString();
        });

        
        fs.appendFile("logFile.txt",body, (err) =>{
            if(err)
            {
                console.log(err);
            }
        }) ;
    }
    response.end();
});


server.listen(5000);