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
