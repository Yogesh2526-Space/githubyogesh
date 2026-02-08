const fs = require("fs");

fs.mkdir("./docs1", (err) =>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Directory Created");
    }
})

fs.writeFile("./docs1/astronomy.txt","It's a mind-blown study",(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("File Created");
    }
})

fs.readFile("./docs1/astronomy.txt", (err,data)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data.toString());

    }
})


if(fs.existsSync("./docs")){
fs.unlink("./docs1/astronomy.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully unliked");
    }
})
}