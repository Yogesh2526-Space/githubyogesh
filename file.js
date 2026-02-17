const fs = require("fs");

const readStream = fs.createReadStream("./docs/me.txt",{encoding : "utf-8"});

const WriteStream = fs.createWriteStream("./docs/copyme.txt");

readStream.on("data",(buffer)=>{
   /*  WriteStream.write("\nNew buffer\n");
    WriteStream.write(buffer); */
    //console.log(buffer);
    readStream.pipe(writeStream)
})
