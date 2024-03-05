 const http = require("http");
const fs = require("fs");
 const myserver = http.createServer((req, res)=>{
    //  console.log(req);
     const log = `${Date.now()}:${req.url} New Request Received \n`;
     fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/": 
            res.end("Hello Everyone ");
             break
             case "/about":
                res.end("I'm Kunal deopa");
             break;
             default:
                res.end("404 not found");
                }
                
     });

    // console.log("New Request Received");
 });
 myserver.listen(8000,()=> console.log("server started!"));