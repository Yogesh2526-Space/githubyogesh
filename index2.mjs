/* import express from "express";

const app = express();

const PORT = 9000;

const users = [
    {id:1, user_name: "Yogesh"},
    {id:2, user_name: "Durai"},
    {id:3, user_name: "Aswin"},
    {id:4, user_name: "Renuka"},
]

app.get("/", (req,res)=>{
    res.send({msg:"Root"});
});

app.get("/api/users",(req,res)=>{
    res.send(users);
})

app.listen(PORT, ()=>{
    console.log(`App is running on Port ${PORT}`);
});
 */

import express from "express";

const app = express();

const PORT = 7000;

const users = [
    {id: 1, user_name : "Yogesh"},
    {id: 2, user_name: "Aswin"},
    
]

app.get("/", (req,res)=>{
    console.log("GET / - Root request");
    res.send({msg: "Root"});
});

app.get("/api/users" ,(req,res)=>{
    console.log("GET /api/users - Fetching all users");
    res.send(users);
});

app.get("/api/users/:id" ,(req,res)=>{
    console.log(`GET /api/users/${req.params.id} - Fetching user by ID`);
    
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.send({msg: "Bad Request"});
    }
    const user = users.find((user)=>user.id === id);
    if(user){
        return res.send(user);
    }
    return res.send({msg: "User Not Found"});

})

app.listen(PORT, ()=>{
    console.log("Server is listening on port 7000")
});