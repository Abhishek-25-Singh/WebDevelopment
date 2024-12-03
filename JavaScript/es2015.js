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

