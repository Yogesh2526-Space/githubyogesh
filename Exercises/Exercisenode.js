const http = require("http");
  const fs = require("fs");

const server = http.createServer((req,res)=>{
    console.log("Request Made");
    console.log(req.url);

    res.setHeader("content-Type", "text/html");
    

    let path = "./docs/";
    if(req.url == "/join" || req.url == "/"){
        path += "join.html";
    }
    else if(req.url == "/home"){
        path += "index.html";
    }
    else if(req.url == "/about"){
        path += "about.html";
    }
    else{
        path += "index.html";
    }
  fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err.message);
        res.end();
    }
    else{
        res.end(data);
    }
  });
});

server.listen(5000, "localhost", ()=>{
    console.log("Server is listening");
});