
//1️⃣ JSON (JavaScript Object Notation)

//JSON is a lightweight text format used to store and exchange data.

//It uses key–value pairs similar to JavaScript objects.

//Commonly used in APIs and data transfer.

let studentJSON = '{"name":"Yogesh","marks":85}';

//2️⃣ Object to JSON Conversion

//JavaScript objects cannot be sent directly over the network.

//JSON.stringify() converts an object into JSON string.

//Used while sending data to servers.

let obj = { name: "Yogesh", age: 22 };
let jsonData = JSON.stringify(obj);

//3️⃣ JSON to Object Conversion

//JSON data received from server is in string format.
//JSON.parse() converts JSON string into object.
//After conversion, object properties can be accessed.

let jsonStr = '{"name":"Yogesh","age":22}';
let obj = JSON.parse(jsonStr);
console.log(obj.name);

//4️⃣ Date and Time

//JavaScript provides Date object to work with date and time.

//It can get current date, time, and year.

//Useful for logging, timestamps, and 

let d = new Date();
console.log(d.getFullYear());

//5️⃣ Recursive Function

//A recursive function calls itself.
//It must have a base condition to stop execution.
//Used in factorial, Fibonacci

function fact(n){
    if(n === 1) return 1;
    return n * fact(n - 1);
}
console.log(fact(5));