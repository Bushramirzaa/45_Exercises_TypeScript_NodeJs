// define veriables
let apple = "apple";
let uppercaseApple ="APPLE";
let ten = 10;
let twenty = 20;
let fruits =["apple", "banana", "orange"];

// test for equality and inequality with strings

console.log("Is apple is equal to apple");
console.log(apple == "apple");


console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");

// tests using Lowercase function
console.log ("\nIs APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical tests 
// equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// greater then
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);

// less then 
console.log("\nIs twenty is less then 10?");
console.log(twenty <10);

// greater then or equal to
console.log("\nIs ten is greater then or equal to 5?");
console.log(ten >= 5);

// less then or equal to
console.log("\nIs twenty is less then or equal to ten?");
console.log(twenty <= 10);

// tests using "and" & "or" operator

// using && (AND)
console.log("\nTwenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);

console.log("\nTwenty is not equal to 10 and twenty is greater then 10");
console.log(10 != 10 && twenty > 30);


// using ||(OR)
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);


console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);

// test whether an item is include in array
console.log("\nIs orange include in my furits array");
console.log(fruits.includes("orange"));

// not include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));















