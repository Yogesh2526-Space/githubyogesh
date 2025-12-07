// implicit type conersion

let age =23;
console.log(age);

console.log('12'+'2');

//expilici type conersion

let agee=23;
console.log(typeof agee);
agee=string(agee);
console.log(typeof agee); 

//conerting into numbered data type
 let agey=23;
agey = Number(agey);
console.log(typeof agey);

console.log(agey); 

 let x1 = 5;

x1 = Boolean(x1);
console.log(typeof x1); 

//Exercise 1

 let a ="25";
let b = 5;

a = Number(a);
let result = a + b;
console.log(result);


// Exercise 2

let x = "100";
let y = "20"

let output = Number(x) + Number(y);
console.log(output);