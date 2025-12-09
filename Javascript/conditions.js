// C onditional statements

let isAdult;

let age = 19;

if(age>19){
    
    person = 'adult';
}
else if(age>12){
    person = 'Teenager';
}
else{
    person = 'children';
}
console.log(person); 

//Conditional operator
// we can use this instead of typing long code for if

let person;
let age2 = 19;

person = (age2>18) ? 'Adult' : 'child';

console.log(person);

// using else if in this conditional operator

let person1;  
let age1=22;

person1 = (age1>18) ? 'Adult' : (age1>13) ? 'Teenager' : 'Child';

console.log(person1);

// Exercise problem

let x = 25;

if(x>0){
    console.log('Positive Number');
}

else if(x == 0){
    console.log("0");
}

else{
    console.log("Negative Number");
} 

// Exercise 2
// leap year condition
// if a year divisible by 4 it should divisible
// by 100 and 400 and gives rem = 0 to make it as leap year

let year = 2032;

if(year % 4 == 0){
    if (year % 100 == 0){
        if (year % 400 == 0){
            console.log("It's a leap year");
        }
        else{
            console.log('Not a leap year');
        }
    }
    else{
        console.log('Leap Year');
    }
}
else{
    console.log("Not a leap year");
}