let x = 5;
{
  let x = 3;
}
console.log("x", x);

//////////////////////////////////

let y = 5;
function myfunc() {
  y = 3;                    // here y is not declared, so it will assign y = 3;
}
myfunc();
console.log("y", y);

/////////////////////////////////

// Hoisting

var a = 5; // Initialize x
console.log(a + " " + b);           // Display a and b => b is undefined because it is not initialized (JS does not hoist initialization)

var b = 7; // Initialize b




