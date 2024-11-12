//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.
//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:

//? Boolean: Represents a logical entity with two values: true or false.
// Example:

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");
//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓

//* Null is a Assignment value, meaning that a variable has been declared and assigned the value null
var iAmUseless = null;
console.log(iAmUseless);

//* In case of undefined a variable has been declared but not yet assigned a value
var iAmStandby;
console.log(iAmStandby);

//? 2: What is the purpose of typeof operator in JavaScript❓
//*The typeof operator in JavaScript is used to determine the type of a variable or expression. It returns a string that indicates the data type of the operand.
//? 3: What is the result of `typeof null` in JavaScript❓
console.log(typeof null);
//? 4: What are primitive data types in JavaScript❓
//*1.number
//*2.Boolean
//*3.String
//*4.BigInt
//*5.null
//*6.undefined
//*7.Symbol

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
var StrNum1 = +"123";
console.log(typeof(StrNum1));
var StrNum2 = +"ABHI";
console.log(typeof(StrNum2));
console.log(StrNum2);
//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:
var numStr1 = 123+"";
console.log(typeof( numStr1));

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓

//* In JavaScript, values are either considered "truthy" or "falsy" when evaluated in a boolean context.

//? Truthy values are treated as true when used in conditions. Examples include:
// 👉 true
// 👉 Any non-empty string ("hello")
// 👉 Any non-zero number (42)
// 👉 Arrays and objects, even if they're not empty

// Falsy values are treated as false in boolean contexts. Examples include:
// 👉 false
// 👉 0 (zero)
// 👉 '' (an empty string)
// 👉 null
// 👉 undefined
// 👉 NaN (Not a Number)


//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.
let myString = "";

if (myString) {
  console.log("The string is truthy!");
} else {
  console.log("The string is falsy."); // This will execute
}


//* ==========  Data Types End Section ==========
//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.
//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString, 10);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.
