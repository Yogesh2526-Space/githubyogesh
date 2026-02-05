  const fs = require("fs");
if ( ! fs.existsSync("./docs")){
fs.mkdir("./docs", (err)=>{
    if(err){
        console.log(err.message);
    }
    else
        console.log("Folder Created");
})
}

fs.writeFile("./docs/file.txt", "Enceladus", (err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("File Created");
    }
}) 

fs.readFile("./docs/file.txt", (err,data)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data.toString());
    }
}) 

fs.unlink("./docs/file.txt",(err)=>{
    if(err){
        console.log(err.message);
    }
    else
        console.log("File Unlinked");
})

if(existsSync("./docs")){
fs.rimdir("./docs", (err)=>{
    if(err){
        console.log(err.message);
    }
    else
        console.log("Directory Removed");
})
}

