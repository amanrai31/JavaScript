// Integers
let x = 0.2 + 0.1; //Floating point arithmetic not always 100% accurate

console.log(x);

x = (0.2 * 10 + 0.1 * 10) / 10;

console.log(x);

// Numbers and string (+ opertor use to concate and addition)

{
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;          // x + y "added" coz both were number, (x+y) + z "concatenated" cuz z is string
console.log(result)
console.log("23" + 5 + 3);
}

// Strings can have numeric content.
{
let x = "100";
let y = "10";
console.log(x/y);
console.log(x * y);
console.log(x - y);
console.log(x + y);
}

//NaN
{
let x = NaN;
let y = 5;
let z = x + y;
console.log(z);
console.log("z is =>", z , "typeOf a NaN variable(z) =>",typeof(z) ); // z is NaN but typeof NaN is number
}

//BigInt
{
    // create BigInt
    let a = 99999999999999999999999n; 
    let b = BigInt(99999999999999999999999);
    console.log(typeof(a));
   // let c = 5 * a;    ===========> Error: Cannot mix BigInt and other types, use explicit conversion
    
    // Either convert Number to BigInt or BigInt to Number
    let d = 5n;
    let e = Number(d) * 2;     // OR let e = d * BigInt(2);
    console.log(e);

    console.log("max safe integer =>", Number.MAX_SAFE_INTEGER, "min safe integer =>",Number.MIN_SAFE_INTEGER)
}




