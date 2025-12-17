
// Array – Solution

//Problem: Create an array of 5 numbers and print the sum of all numbers.

let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log("Sum =", sum);

//Adding Value Using Index – Solution

//Problem: Create an array with 2 subjects, add a third subject using index, then display all subjects.

let subjects = ["Maths", "Science"];

subjects[2] = "English";

for(let i = 0; i < subjects.length; i++){
    console.log(subjects[i]);
}

//Accessing All Elements – Solution

//Problem: Given an array of marks, print only the marks greater than 50.

let marks = [35, 78, 45, 90, 60];

for(let i = 0; i < marks.length; i++){
    if(marks[i] > 50){
        console.log(marks[i]);
    }
}

//Size of an Array – Solution

//Problem: Create an array of fruits and display how many fruits are present.

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Total fruits =", fruits.length);

//Two-Dimensional Array – Solution

//Problem: Create a 2D array representing marks of 3 students in 2 subjects and print all marks row-wise.

let marks2D = [
    [80, 75],
    [60, 70],
    [90, 85]
];

for(let i = 0; i < marks2D.length; i++){
    for(let j = 0; j < marks2D[i].length; j++){
        console.log(marks2D[i][j]);
    }
}
