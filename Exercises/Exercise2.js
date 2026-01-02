// OR and AND

let age1 = 22;
let Gender = 'F';

if(age >=21 || (age>=18 && Gender == 'F'))
{
    console.log("Candidate is Eligible for Voting");
}
else{

console.log("Candidate is Not Eligible for Voting");
} 

// Null coleasing

let age = null;
let current_age = age ?? 22;

console.log(current_age);


// factorial

let n1 = 5;

let ans1 = 1;

for(i=1; i<=n; i++)
{
    ans1 = ans1 * i;
    console.log(ans1);
} 

    // using while loop

    let n = 5;
    let i=1;
    let ans= 1;

    while(i<=n){
        ans = ans * i;
        i++;
    }
    console.log(ans);