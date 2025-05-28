let x = 5;
{
  let x = 3;
}
console.log("x", x);

let y = 5;
function myfunc() {
  y = 3;                    // here y is not decleared, so it will assign y = 3;
}
myfunc();
console.log("y", y);

// Hoisting

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y => y is undefined because it is not intialized

var y = 7; // Initialize y
