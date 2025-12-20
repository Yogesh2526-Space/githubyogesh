//A class is a blueprint used to create objects with common properties and behaviors.
//It groups variables (data) and functions (methods) into a single unit.
//Classes use a constructor to initialize data and can have getter and setter methods to access or update values safely.
//Example Problem
//Create a Student class that stores name and marks, calculates result using a function, and uses getter and setter methods. 
//Then create an object and use it.



// Class definition
class Student {
    constructor(name) {          // constructor only sets name
        this.name = name;
        this.marks = 0;          // default value
    }

    // normal function (method)
    getResult() {
        return this.marks >= 40 ? "Pass" : "Fail";
    }

    // getter method
    get studentMarks() {
        return this.marks;
    }

    // setter method (marks set here)
    set studentMarks(newMarks) {
        this.marks = newMarks;
    }
}

// Object creation
let s1 = new Student("Yogesh");

// Setting marks using setter
s1.studentMarks = 55;

// Using methods
console.log(s1.studentMarks);   // 55 (getter)
console.log(s1.getResult());    // Pass