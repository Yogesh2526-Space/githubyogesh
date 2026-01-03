
//Object Reference

//Description (3 lines):
//Object reference means variables store the address of the same object in memory.
//Changing the object through one reference affects all references.
//Objects are shared, not copied, when assigned.

//Expanded example problem:
//Two variables refer to the same object. Modify one property using one variable and observe the change using the other.

let user1 = { name: "Aswin", age: 22 };
let user2 = user1;

user2.age = 25;

console.log(user1.age);   // What will be the output?
console.log(user2.age);


// Constant Object (const)

//Description (3 lines):
//A const object reference cannot be reassigned.
//Its internal properties can still be modified.
//const protects the reference, not the data.

//Expanded example problem:
//Change a property of a constant object and try reassigning it to a new object.

const student = { name: "Yogesh", marks: 80 };

student.marks = 90;       // Allowed
// student = { name: "Ram" };  // Not allowed

console.log(student);


//Garbage Collection

//Garbage collection removes unused objects from memory automatically.
//An object becomes eligible when no references point to it.
//This helps prevent memory leaks.

//Expanded example problem:
//Remove all references to an object and identify when it becomes garbage.

let data = { value: 100 };
let temp = data;

data = null;
temp = null;

// At this point, the object is eligible for garbage collection


// Constructor Function
//A constructor function is used to create multiple similar objects.
//The new keyword creates a new object and assigns this.
//It helps organize object creation logically.

//Expanded example problem:
//Create multiple employee objects //using a constructor and access their //properties.

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

let emp1 = new Employee("A", 30000);
let emp2 = new Employee("B", 40000);

console.log(emp1.name, emp1.salary);
console.log(emp2.name, emp2.salary);


// this Keyword

//Description (3 lines):
//The this keyword refers to the object //calling the function.
//Its value changes based on how the function is invoked.
//In object methods, it points to the object itself.

//Expanded example problem:
//Use this inside an object method to access object properties.

let car = {
    brand: "Honda",
    getBrand() {
        return this.brand;
    }
};

console.log(car.getBrand());  