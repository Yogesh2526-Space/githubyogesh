// 1. Declare variables
let studentName = "Kajal";
let studentAge = 18;
let studentCourse = "Artificial Intelligence";

// 2. Create object using variables
let student = {
    name: studentName,
    age: studentAge,
    course: studentCourse
};

// 3. Add new properties
student.city = "Chennai";
student.grade = "A";

// 4. Change values
student.age = 19;
student.city = "Bangalore";

// 5. Add function (method) inside object
student.introduce = function () {
    console.log(
        "Hi, my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old studying " +
        this.course + "."
    );
};

// Call the function
student.introduce();

// 6. Delete a property
delete student.grade;

// 7. for...in loop to print properties and values
for (let key in student) {
    console.log(key + " : " + student[key]);
}

// 8. in operator check
if ("age" in student) {
    console.log("Age property exists");
} else {
    console.log("Age property does not exist");
}
