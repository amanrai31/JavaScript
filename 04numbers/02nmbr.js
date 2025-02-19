// String method.


// [1] toString() => to output numbers from base 2 to base 36.
{
    let myNumber = 39;
    console.log(myNumber.toString(32),myNumber.toString(16),myNumber.toString(12),
    myNumber.toString(10),myNumber.toString(8),myNumber.toString(2))

    // if argument is not there it converts to decimal notation by default
}

// [2] toFixed() => returns string with number written with a specified number of decimals.
{
    let x = 1.25456;
    console.log(x.toFixed(), x.toFixed(2), x.toFixed(4), x.toFixed(8));

    let y = 2.256;
    console.log(y.toFixed());    // if no argument passed then it takes 0 by default (round of to nearest integer)
}

// [3] toPrecision() => returns string with number written with a specified length.
{
    let x = 9.656;
    console.log(x.toPrecision(), x.toPrecision(2), x.toPrecision(4), x.toPrecision(6));

    let y = 0.256;
    console.log(y.toPrecision());    // if no argument passed then it takes 1 by default (round of to nearest integer)
}

// Global JS methods for numbers => Number(), parseFloat(), parseInt()
{
    console.log(Number("1.45"), Number(true), Number(3, 98), Number("aman"));
    console.log(parseFloat("1.45"), parseFloat("1.45.45"), parseFloat("aman"), parseFloat(true));
    console.log(parseInt("1.45"), parseInt("2 year"), parseInt("aman"), parseInt("1.45", 10));
}

console.log(Number.MAX_SAFE_INTEGER, Number.MAX_VALUE)