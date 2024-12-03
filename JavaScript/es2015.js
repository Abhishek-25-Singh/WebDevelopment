//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================

//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================


                   // *Var Keyword  
// var MyFavWorldBestName = "Abhishek";
//     MyFavWorldBestName = "Abhishek Singh";
//     console.log(MyFavWorldBestName);

                // *let Keyword  
// let MyFavWorldBestName = "Abhishek";
//     MyFavWorldBestName = "Abhishek Singh";
//     console.log(MyFavWorldBestName);


              // *const Keyword  
// const MyFavWorldBestName = "Abhishek";
//! Uncaught TypeError: Assignment to constant variable.
    // MyFavWorldBestName = "Abhishek Singh";  
    // console.log(MyFavWorldBestName);


//*-----------------Example 1 Var Keyword--------------------
// var name = "abhishek";

// if(true){
//     var name = "Singh";
//     console.log(name);
// }
// var name = "Abhishek Singh";
// console.log(name);


//*-----------------Example 2 let Keyword--------------------
// let name = "abhishek";

// if(true){
//     let name = "Singh";
//     console.log(name);
// }
//  name = "Abhishek Singh";
// console.log(name);

//*-----------------Example 3 const Keyword--------------------
// const name = "abhishek";

// if(true){
//     const name = "Singh";
//     console.log(name);
// }
//  name = "Abhishek Singh";
// console.log(name);


                       //* Var Keyword
// if(true){
//     var name = "Singh";
//        console.log(name);
// }
//  name = "Abhishek Singh";
//  console.log(name);

                      //* let Keyword

//      if(true){
//      let name = "Singh";
//    console.log(name);
// }
//       name = "Abhishek Singh";
//          console.log(name);


// if(true){
//     let name = "Singh";
//   console.log(name);
// }
//! Error -->Uncaught ReferenceError: name is not defined
        // console.log(name);


//* ==========================================
//* TEMPLATE STRINGS - EcmaScript 2015
//* =========================================


// let firstName = "Abhishek";
// let lastName = "singh";

// let fullName = firstName + lastName;
// console.log(fullName);

//*-----------------String Interpolation--------------------
// let age = 29;
// // Using template string for string interpolation
// String interpolation with variable
// let message = `I am ${age} years old.`;
// console.log(message);


//*-----------------Multi-line Strings--------------------
// let multiLineString = `
//   This is a multi-line
//   string using template literals.
//   It's much cleaner and easier to read.
// `;

// console.log(multiLineString);


//*-----------------Expression Evaluation--------------------
//? Expression Evaluation: Template expressions can include any valid JavaScript expression.

//! Practice Time
// let num =5;
// console.log("5 * " + num + " = " + 5 * num);
// console.log(`5 * ${num} = ${num * num} `);


//? Advantages:
//? Readability

//? Conciseness

//? Expression Flexibility

//? Multi-line Support


//* ==========================================
//* DEFAULT Parameters
//* =========================================

//! Write a function to find sum of two numbers? What if during function call user only passed one argument?
//? NO Default parameter
// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,6);
//! Output : NaN
// sum(7);

//*------------------With Default Parameter---------------
// function sum(a=9,b=6){
//     console.log(a+b);
// }
// sum();
// sum(2,1);


//* ==========================================
//*  FAT ARROW FUNCTION
//* =========================================

// const sum = function(a,b){
//     let result = `The sum of ${a} and ${b} is ${a + b}.`;
//      console.log(result);
// }

// sum(5,5)

const sum = (a,b)=>{
    let result = `The sum of ${a} and ${b} is ${a + b}.`;
    console.log(result);

}
sum(5,5);

//! How to convert the same in fat arrow function
// Syntax
// const functionName = (param1, param2, ...) => {
//     // Function body
//     return result; // Optional
//   };


// todo NOTES

//🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));

//🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = a => `The square of ${a} is  ${a * a}`;
// console.log(square(5));

//🚀 3: If there are no parameters, use an empty set of parentheses ().
// const greet = () => console.log('abhishek Singh');
