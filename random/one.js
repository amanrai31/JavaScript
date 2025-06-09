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
