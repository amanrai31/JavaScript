// Scope  

// Point to remmember => 1st => What is it, is it const, let or var or not decleared at all, 2nd => where it is defined, inside block, function or global scope.

// {
//   x = 10;     // Not defined that it is var, let or const => will be a global vaiable
// }
// console.log(x);  // Will give 10;

// {
//   var x = 10;     // var does not respect block scope so x will be accessible outside
// }
// console.log(x);  // Will give 10;

// {
//   let x = 10;     // let and const do respect block scope
// }
// console.log(x);   // Will give ReferenceError

let x = 5;
{
  let x = 3;          // this x is valid for this block only. If we do var here => SyntaxError: Identifier 'x' has already been declared
}
console.log("x", x);

//////////////////////////////////

let y = 5;
function myfunc() {
  y = 3;                    // here y already declared in global scope, so it will re-assign y = 3 
}
myfunc();
console.log("y", y);

/////////////////////////////////

let y = 5;
function myfunc() {
  x = 3;                    // x will be global 
}
myfunc();
console.log("y =>", y, "||", "x =>" x);  // x will be a global variable, but if we do this in strict mode- will give ReferenceError

//Hoisting

{
x = 10;
console.log(x);
const x;                // Syntax error => We have to intialize const
}

{
x = 10;
console.log(x);
let x;                 // ReferenceError: Cannot access 'x' before initialization
}

{
x = 10;
console.log(x);
var x;                // No issue
}

{
console.log(x);
var x = 10;           // JS only hoist declrations, not the initialization (even if it is var) => Will give undefined
}




