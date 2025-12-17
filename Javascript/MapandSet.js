
// 1️⃣ Map (data structures)
// Map stores data as key–value pairs.
// Keys can be of any data type.
// It maintains insertion order.

let studentMap = new Map();



// 2️⃣ Adding values in a Map
// Values are added using set(key, value).
// Existing keys update their value.
// Multiple entries can be stored.

let marks = new Map();

marks.set("Maths", 85);
marks.set("Science", 90);
marks.set("English", 78);




// 3️⃣ Reading data from a Map
// get(key) is used to read a value.
// Returns undefined if key is not found.
// Access is done using keys, not index.

console.log(marks.get("Science"));



// 4️⃣ Searching an element in a Map
// has(key) checks if a key exists.
// It returns true or false.
// Useful before reading or deleting data.

console.log(marks.has("Maths"));
console.log(marks.has("History"));



// 5️⃣ Deleting an element in a Map
// delete(key) removes a single entry.
// Only the specified key–value pair is deleted.
// Map size reduces automatically.

marks.delete("English");



// 6️⃣ Deleting entire elements in a Map
// clear() removes all entries.
// Map becomes completely empty.
// Size becomes zero.

marks.clear();



// 7️⃣ Size of a Map
// size returns total number of entries.
// It is a property, not a method.
// Automatically updates on add or delete.

let data = new Map();
data.set(1, "A");
data.set(2, "B");

console.log(data.size);

//  Printing each element in a Map
// for...of loop is used for iteration.
// Each entry gives key and value.
// Insertion order is maintained.

let employee = new Map();

employee.set("id", 101);
employee.set("name", "Yogesh");
employee.set("role", "Developer");

for (let [key, value] of employee) {
    console.log(key + " : " + value);
}


//Set (data structures)
// 1️⃣ Set
// Set stores only unique values.
// Duplicate values are not allowed.
// Values can be of any data type.

let mySet = new Set();



// 2️⃣ Adding values in a Set
// add(value) is used to insert data.
// Duplicate values are ignored.
// Insertion order is maintained.

mySet.add(10);
mySet.add(20);
mySet.add(10);   // ignored
mySet.add(30);



// 3️⃣ Reading data from a Set
// Set does not support index-based access.
// Values are read using loops.
// Each value is accessed directly.

for (let value of mySet) {
    console.log(value);
}



// 4️⃣ Searching an element in a Set
// has(value) checks if a value exists.
// It returns true or false.
// Useful before deletion.

console.log(mySet.has(20));
console.log(mySet.has(50));



// 5️⃣ Deleting an element in a Set
// delete(value) removes a single value.
// Only the specified value is removed.
// Size updates automatically.

mySet.delete(20);


// 6️⃣ Deleting entire elements in a Set
// clear() removes all values.
// Set becomes empty.
// Size becomes zero.

mySet.clear();


// 7️⃣ Size of a Set
// size returns total number of values.
// It is a property, not a function.
// Automatically updates on changes.

let numberSet = new Set();
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);

console.log(numberSet.size);


// 8️⃣ Printing each element in a Set
// for...of loop is commonly used.
// Each loop gives one value.
// Order of insertion is preserved.

let citySet = new Set();

citySet.add("Chennai");
citySet.add("Bangalore");
citySet.add("Hyderabad");

for (let city of citySet) {
    console.log(city);
}