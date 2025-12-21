//Inheritance is an object-oriented programming concept where one class (child) acquires properties and methods of another class (parent).
//It helps in code reusability by allowing common features to be written once and reused.
//Inheritance also supports method overriding, enabling a child class to provide its own behavior.
//Overall, it improves maintainability and extensibility of programs by creating a clear class hierarchy.

//Example Problem 1:


// Parent class
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    showVehicleDetails() {
        console.log("Brand:", this.brand);
        console.log("Speed:", this.speed);
    }
}

// Child class
class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed);   // calling parent constructor
        this.fuelType = fuelType;
    }

    showCarDetails() {
        console.log("Fuel Type:", this.fuelType);
    }
}

// Object creation
let car1 = new Car("Tata", 120, "Petrol");

// Calling methods
car1.showVehicleDetails();   // Parent class method
car1.showCarDetails();       // Child class method

// Example Problem 2: 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayPersonDetails() {
        console.log(this.name);
        console.log(this.age);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }

    displayStudentDetails() {
        this.displayPersonDetails(); // parent method
        console.log(this.marks);
    }
}

let std = new Student("Yogesh", 21, 85);
std.displayStudentDetails();