/* let time= 20;

if(time >= 5 && time<= 11)
{
    console.log("Morning");
}
else if(time >= 12 && time <= 16)
{
    console.log("Afternoon");
}
else if(time >= 17 && time <= 20)
{
    console.log("Evening")
}
else
{
    console.log("Night");
} */

// Exercise2

let a = 10;
let b = 10;
let c = 10;

if (a + b > c) {
    if (a + c > b) {
        if (b + c > a) {
            // Valid triangle
            console.log("Valid Triangle");

            // Now check type
            if (a === b && b === c) {
                console.log("Equilateral");
            } 
            else if (a === b || b === c || a === c) {
                console.log("Isosceles");
            } 
            else {
                console.log("Scalene");
            }

        } 
        else {
            console.log("Invalid Triangle");
        }
    } 
    else {
        console.log("Invalid Triangle");
    }
} 
else {
    console.log("Invalid Triangle");
}


