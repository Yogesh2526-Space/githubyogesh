//Promise represents a value that will be available in the future, either resolved (success) or rejected (failure).
//setTimeout() delays the execution of code for a specified amount of time (in milliseconds).
//then() runs when a Promise is successfully resolved and receives the resolved value.
//catch() runs when a Promise is rejected and handles the error.
//finally() runs after the Promise is completed, regardless of success or failure.

//Example Problem 1

let orderStatus = "delivered";

function checkingStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderStatus === "delivered") {
                resolve("Order delivered successfully");
            } else {
                reject("Order delivery failed");
            }
        }, 100);
    });
}

function statusDisplay() {
    checkingStatus()
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Here is your order status");
        });
}

statusDisplay();

//Example Problem 2

function checkResult(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 40) {
            resolve("Pass");
        } else {
            reject("Fail");
        }
    });
}

// Change marks value to test
let marks = 35;

checkResult(marks)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Result processed");
    });
