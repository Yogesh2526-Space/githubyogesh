 // Problem 1
let marks = 39;

function processData() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if (marks >=40){
            resolve ("Pass");
        }
        else{
            reject ("Fail");
        }
        },1000);
    });
}

function fetchData() {
    processData().then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(()=>{
        console.log("That's Your Result");
    })
}

fetchData(); 

//Problem 2

let balance = 400;

function processTransaction(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (balance >= 500){
                resolve('Withdrawal Successfull');
            }
            else{
                reject('Insufficient Balance')
            }
        },1000);
    });
}

function fetchTranscation(){
    processTransaction().then((message)=>{
        console.log(message);
    })
    .catch((error)=> {
        console.log(error);
    })
    .finally(()=>{
        console.log("Transcation Details");
    })
}

fetchTranscation();

// Problem 3

let password = "yoks";

function authenticateUser(){
    return new Promise((reject,resolve)=>{
        setTimeout(()=>{
            if(password=="admin123"){
                resolve("Login Successfully");
            }
            else{
                reject("Invalid Credentials");
            }
        },1000);
    });
}

function handleLogin(){
    authenticateUser().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Authentication Successfull");
    })
}
handleLogin();
