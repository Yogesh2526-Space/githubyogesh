// Functions

let a =12, b = 24;

function operation(a1,b)
{
    console.log((a+b*b/a)*b);
}

operation(a,b);

operation (12,13);   

// local and global scope

// Functions

let a1 =12, b1 = 24;

function operation(var1,var2)
{
    let c=((var1+var2*var2/var1)*var2);
}

operation(a,b);

operation (12,13); 

// Assigning a function to a variable

let a2 = 11;

function oddEven(a){
    if(a2%2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
    
} 

let oddorEven = oddEven;

console.log(oddorEven(a2)); 

// arrow function
// let oddorEven = (a) => (or) nameless function

// Call back
// passing function as parameters called as call back


function operation (op, a, b){
    return op(a,b);
}

let add = (a,b) => a+b;

function sub(a,b){
    return a-b;
}

console.log(operation(add, 25, 26)); 

// problem 1 in call back
function operation (op ,a, b)
{
    return op(a,b);
}

let multiply = (a,b) => a*b;

console.log(operation(multiply, 25, 26));