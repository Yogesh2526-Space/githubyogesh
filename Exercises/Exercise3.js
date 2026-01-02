//Write a program that:
//Takes a number n.
//Prints all the numbers from 1 to n that are divisible by both 2 and 3.
//If no numbers are found, print "No numbers found".
let n = 10;
let i = 1;
let found = false;

while (i <= n) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
        found = true;
    }
    i++;
}

if (!found) {
    console.log("No numbers found");
} 

//problem 2

//Write a program that:
//Takes a number n.
//Prints all prime numbers from 1 to n.
//At the end, print how many prime numbers were found

let w = 7;

flag = false;

for(i=2; i<w; i++){
    if(w%i == 0){
        console.log("Not a prime number");
        flag = true;
        break;
    }
}
if(flag == false){
    console.log("Prime number");
} 

//Problem 3

//Write a program
//Takes a number n.
//Prints a pattern of n rows, where each row contains numbers from 1 up to the row number

let i1 = 5;

for(i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        
        console.log(j);
    }
} 

// problem 4
//Write a program that:
//Takes a number n.
//Prints all the numbers from 1 to n that are perfect squares
//(like 1, 4, 9, 16, 25…).
//At the end, print how many perfect squares were found.

let n1 = 5;

let i2=1;

do {
    console.log(i*i);
    i++;
} while(i<=n){
    console.log("That's all!");
} 

// problem 5

//Write a program that:
//Takes three numbers: a, b, c.
//Use nested if statements to determine whether they can form a triangle.
//If they form a triangle, then inside that block:
//Check if it is Equilateral (all sides equal)
// || Isosceles (any two sides equal)
// || Scalene (all sides different)

let a=5;
let b=5;
let c=5;

if(a + b > c){
    if(a + c > b){
        if(b + c > a){
            console.log("It's a valid triangle");
            if(a==b && b==c){
                console.log("Equilateral Triangle");
            }
            else if(a==b || b==c || c==a){
                console.log("Isoceles Triangle");
            }
            else{
                console.log("Scalene Triangle");
            }
        }
        else{
            console.log("Not a valid triangle");
        }
    }
    else{
            console.log("Not a valid triangle");
        }
}
else{
            console.log("Not a valid triangle");
        }