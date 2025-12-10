// while loop, Do while loop, For loop

//-- Initialization, Validation, Updation 

// While loop

// printing from 1-10
// while loop runs until the statement is true
// Entry controlled loop
let i = 1;

while(i <=10)
{
    console.log(i);
    i++;
}
console.log("Outside loop"); 

// Do While loop
// Exit control loop
let num = 11;

do{
    console.log(num);
    num ++;
}while(num <= 10);

console.log("Outside Loop"); 

// For loop and continue, break

for (let num = 1; num <=10; num++){
    if(i == 8){
        break;
    }
    console.log(num);
}

