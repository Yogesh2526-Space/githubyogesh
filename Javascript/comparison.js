 // < comparison operators always return boolean

let a1=12;
let b1=13;
let result1 = a<b;
console.log(result); 

// comparison operator

let a2=12;
let b2=12;

let result2 = a==b;
console.log(result); 

// string comparision
// js compare the characters using unicode that is it will assign a code for each letter
// it will take the first character of the variable eg c=3; and g=7; the g has higher unicode value so that it will print g;
// Aa 12= capital letter has less value than small letter
let a3 = 'g';
let b3='c';

let result3= a>b;

console.log(result);

// strict equality
// it functions the comparison of two differen data type without converting type
// null coverting to number will 0
// undefined converting to number will NaN
let a= '25';

a = Boolean(a);

let b=25;

b = Boolean(b);

console.log('a'=== b);


