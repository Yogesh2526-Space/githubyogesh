 // Problem 1

function Product(name, price, stock)
{
    this.name=name;
    this.price=price;
    this.stock=stock;
    
    this.getDiscount = function(){
        if(price >= 5000){
            return "15 percent";
        }
        else{
            return "5 percent";
        }
    }
}

let stk1 = new Product("Aswin", 3000, 5);

console.log(stk1.getDiscount()); 

// problem 2 

function Student(name, marks, attendance)
{
    this.name = name;
    this.marks = marks;
    this.attendance = attendance;

    this.getResult = function(){
        if(this.marks >= 75 && this.attendance>=80){
            return "Distinction";
        }
        else if(marks>= 40){
            return "Pass";
        }
        else{
            return "Fail";
        }
    }
}

let a1 = new Student("Yogesh", 79, 90)

console.log(a1.getResult()); 

//problem 3

function BankAccount(accountHolder, balance, accountType)
{
    this.accountHolder=accountHolder;
    this.balance=balance;
    this.accountType=accountType;

    this.calculateInterest = function (){
        if(this.accountType == "savings" && this.balance >= 50000){
            return "4 Percentage";
        }
        else if(this.accountType == "current"){
            return "0 Percentage";
        }
        else{
            return "3 Percentage";
        }
    }
}

let at = new BankAccount("Mr.Yogesh", 50001, "savings")

console.log(at.calculateInterest()); 

// problem 4

function Vehicle(brand, fuelType, mileage)
{
    this.brand = brand;
    this.fuelType = fuelType;
    this.mileage = mileage;

    this.getbestvehicle = function ()
    {
        if(fuelType == "petrol" && mileage >=15){
            return "Economical Vehicle";
        }
        else if(fuelType == "Diesel" && mileage >=20){
            
            return "Economical Vehicle";
        }
        else{
            return "Non-Economical Vehicle";
        }
    }
}

let e1 = new Vehicle("Tata Nexon", "Diesel", 19)

console.log(e1.getbestvehicle());