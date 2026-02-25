 const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("Request Made");
})

server.listen(5000, "localhost", ()=>{
    console.log("Server is listening");
}) 


const http = require("http");

const Server = http.createServer((req,res)=>{
    console.log("Request Made");
    console.log(req.method);
    console.log(req.url);

    res.setHeader("Content-Type","text/plain");
    res.write("Renuka, Durai, Yogesh, Aswin");
    res.end();
});


Server.listen(4000,"localhost",()=>{
    console.log("Server Listening");
});