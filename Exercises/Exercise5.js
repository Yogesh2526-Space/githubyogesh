let a1 = 5000;
let b = 3000;
let c = 1000;
let d = 1000;
let amount = 3000;

if(amount>=a1)
{
    console.log("20% Discount");
}
else if(amount >= b && amount<a1)
{
    console.log("10% Discount");
}
else if(amount >= c && amount<b)
{
    console.log("5% Discount");
}

else{
    console.log("No Discount");
}
 
// second problem


let a = 30000;
let exp = 5;

if (a >= 40000) {

    if (exp >= 5) {
        console.log("20% Bonus");
    } else {
        console.log("10% Bonus");
    }

} else {

    if (exp >= 5) {
        console.log("15% Bonus");
    } else {
        console.log("5% Bonus");
    }

}