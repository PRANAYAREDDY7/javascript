/* Operators */

// 1. Arithmetic Operator --> +, -, *, /, %, ++, --
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
a++; // Increment a
console.log(a); // 11
b--; // Decrement b
console.log(b); // 4

// 2. Short-hand / Assignment Operator
let x = 5;
x += 3; // Equivalent to x = x + 3
console.log(x); // 8
x *= 2; // Equivalent to x = x * 2
console.log(x); // 16

// 3. Logical Operator
let isAdult = true, hasLicense = false;
console.log(isAdult && hasLicense); // false
console.log(isAdult || hasLicense); // true
console.log(!isAdult); // false
console.log(isAdult && !hasLicense); // false

// 4. Relational Operator
let num1 = 10, num2 = 20;
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 === 10); // true
console.log(num1 !== num2); // true

// 5. Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes


/* Conditional Statements */

// 1. Simple If
let number = 10; // Changed variable name to avoid conflicts
if (number > 5) {
    console.log("Number is greater than 5");
}

// 2. If-Else
number = 4; // Reuse the `number` variable
if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// 3. Else-If-Else (Else-If Ladder)
let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4. Nested If
age = 25; // Reuse the `age` variable
let citizenship = "USA";
if (age >= 18) {
    if (citizenship === "USA") {
        console.log("Eligible to vote in the USA");
    } else {
        console.log("Not eligible to vote in the USA");
    }
}

// 5. Switch Case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
