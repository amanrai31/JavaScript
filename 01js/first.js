// CONTENT => VARIABLES, OPERATORS, DATA TYPES,  

console.log("hi")

const power = 2**3    // 2 to the power 3
console.log(power)  

console.log("5" + 3);  // + operator works 2 ways => 1. adds, 2. concat
console.log("5" - 3, "5"*3);

console.log(7%-3, -7%3) // Result of remainder depends on numerator sign.

const x = ~5;
console.log("NOT Bitwise of 5 is=>",x)  // Bitwise operates on 32bits

console.log("Type of power = ",typeof(power)); // typeof and instanceof operator

const a = null;
console.log(typeof(a));

const arr = [1,2,3];
console.log("typeof arr => ", typeof(arr));
console.log("arr instanceof Array =>", arr instanceof Array);
