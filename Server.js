 const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("Request Made");
})

server.listen(5000, "localhost", ()=>{
    console.log("Server is listening");
})  


const http = require("http");
const fs = require("fs");

const Server = http.createServer((req,res)=>{   
    console.log("Request Made");
    
    res.setHeader("content-Type", "text/html")
    
    console.log(req.url);
    let path = "./docs/";

    if(req.url == "/home" || req.url == "/"){
        path+= "index.html";
    }
    else if(req.url == "/join"){
        path+= "join.html";
    }
    else if(req.url == "/about"){
        path+= "about.html";
    }
    else{
        path += "index.html";   // default page
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }
        else{
            res.end(data);
        }
    })
});


Server.listen(4000,"localhost",()=>{
    console.log("Server Listening");
});  


const http = require ("http");
const fs = require("fs");

const Server1 = http.createServer1((req,res)=>{
    console.log("Request Made");
    console.log(req.url);

    let path = "./docs"
    if(req.url == "/home" || req.url =="/"){
        path += "/index.html";
    }
    else if(req.url == "/join" ){
        path += "/join.html";
    }
    else if(req.url == "/about" ){
        path += "/about.html";
    }
    else{
        path += "index.html";   // default page
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }
        else{
            res.end(data);
        }
    })
})

Server1.listen(5000,"localhost",()=>{
    console.log("Server1 is hearing the request!!");
});

