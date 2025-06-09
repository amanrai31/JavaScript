// Scope

// {
//   x = 10;     // Not defined that it is var, let or const => will be a global vaiable
// }
// console.log(x);  // Will give 10;

// {
//   var x = 10;     // var does not respect block scope
// }
// console.log(x);  // Will give 10;

// {
//   let x = 10;     // let and const do respect block scope
// }
// console.log(x);   // Will give ReferenceError

let x = 5;
{
  let x = 3;          // do x = 3, then it will be global, If we do var here => SyntaxError: Identifier 'x' has already been declared
}
console.log("x", x);

//////////////////////////////////

let y = 5;
function myfunc() {
  y = 3;                    // here y is not declared, so it will assign y = 3 as part of global scope;
}
myfunc();
console.log("y", y);

/////////////////////////////////

//Hoisting

// x = 10;
// console.log(x);
// const x;                // Syntax error => We have to intialize const

// x = 10;
// console.log(x);
// let x;                 // ReferenceError: Cannot access 'x' before initialization

// x = 10;
// console.log(x);
// var x;                // No issue

// console.log(x);
// var x = 10;           // JS only hoist declrations, not the initialization (even if it is var) => Will give undefined




