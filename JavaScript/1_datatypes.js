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
