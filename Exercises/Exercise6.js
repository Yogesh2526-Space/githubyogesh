// Problem 1

// Create a Map named employeeMap
let employeeMap = new Map();

// Add employees to the map
employeeMap.set(101, { name: "Yogesh", department: "IT", salary: 50000 });
employeeMap.set(102, { name: "Amit", department: "HR", salary: 45000 });
employeeMap.set(103, { name: "Neha", department: "Finance", salary: 55000 });

// Function to get employee details by ID
function getEmployeeDetails(id) {
    if (employeeMap.has(id)) {
        console.log(employeeMap.get(id));
    } else {
        console.log("Employee not found");
    }
}

// Function to update employee salary
function updateSalary(id, newSalary) {
    if (employeeMap.has(id)) {
        employeeMap.get(id).salary = newSalary;
        console.log("Salary updated successfully");
    } else {
        console.log("Employee not found");
    }
}

// Test the functions
getEmployeeDetails(102);
updateSalary(102, 48000);
getEmployeeDetails(102);

// Print total number of employees
console.log("Total Employees:", employeeMap.size);

// Print all employee IDs
for (let id of employeeMap.keys()) {
    console.log("Employee ID:", id);
}

// Problem 2

// Create a Map named productMap
let productMap = new Map();

// Add products to the map
productMap.set(101, { name: "Laptop", price: 60000, stock: 5 });
productMap.set(102, { name: "Mouse", price: 500, stock: 0 });
productMap.set(103, { name: "Keyboard", price: 1500, stock: 10 });
productMap.set(104, { name: "Monitor", price: 12000, stock: 3 });

// Function to check stock
function checkStock(productId) {
    if (productMap.has(productId)) {
        let product = productMap.get(productId);

        if (product.stock > 0) {
            console.log("In Stock");
        } else {
            console.log("Out of Stock");
        }
    } else {
        console.log("Product not found");
    }
}

// Function to apply discount
function applyDiscount(productId, discountPercent) {
    if (productMap.has(productId)) {
        let product = productMap.get(productId);
        product.price = product.price - (product.price * discountPercent / 100);
        console.log("Discount applied. New price:", product.price);
    } else {
        console.log("Product not found");
    }
}

// Check stock
checkStock(102);

// Apply discount
applyDiscount(101, 10);

// Print all product IDs
console.log("Product IDs:");
for (let id of productMap.keys()) {
    console.log(id);
}

// Print total number of products
console.log("Total products:", productMap.size);

// Problem 3

let a = 5;
let b = 0;

try {
  if (b === 0) {
    throw "Cannot divide by zero";
  }
  console.log(a / b);
} catch (err) {
  console.log(err);
}

// Problem 4

let age = 16;

try {
  if (age < 18) {
    throw "Not eligible to vote";
  }
  console.log("Eligible to vote");
} catch (err) {
  console.log(err);
}