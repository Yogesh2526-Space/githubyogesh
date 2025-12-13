 // An Object is a variable that can hold many variables.
//Objects are collections of key-value pairs, where each key (known as property names) has a value.
//Objects can describe anything like houses, cars, people, animals, or any other subjects.
// e.g 1

let car ={
    name: "Nano",
    brand: "Tata",
    Drivetrain: "Petrol,Diesel,Electric vehicle",
    price: 15
};
console.log(car); 

// variables in values

let company = 'Royal Enfield'
let bike = {
    name: "Thunderbird 350",
    brand: company,
    Drivetrain: "Petrol",
    price: 150000

} ; 

console.log(bike.brand); 

//Deleting Property

let student = {
    name: "Yogesh",
    age: "22",
    academics: "Under Graduate",
    year: 4
};

console.log(student.year);
delete student.academics;
console.log(student); 

// Adding a property and changing value of a property

let nutrients = {
    name: "macronutrients",
    one: "carbohydrate",
    two: "Protein",
};

console.log(nutrients.name);

nutrients['three'] = 'Fats';
nutrients.one = 'carbohydrates';

console.log(nutrients); 

//Adding functions in object

let trucks =
{
    name: "Ashok Leyland",
    model: "Tipper",
    fueltype: "Petrol, Diesel, Electric and CNG", 
    showrooms: 455,

truckdealers()
{
    return (this.name+"Bada Dost i5 plus");
}

};

console.log(trucks.truckdealers()); 

// In operator

let fooddelivery = {
    name : "Zomato",
    restaurant: "Raddison Blu",
    food: "Carbonara",
    price: 1200,
};

for(key in fooddelivery)
{
    console.log(key+":"+ fooddelivery[key]);
}

