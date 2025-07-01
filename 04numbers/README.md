# CONTENT => Numbers and BigInt

Numbers are primitive data type(immutable, directly stored in memory), JS has only one type of number. Numbers can be written with or without decimals.

- JS Numbers are Always 64-bit Floating Point (52bits for fraction, 11bits for exponent, 1bit for sign)

### JS strings can have numeric content.

- "+" is used for addition and concatenation (is anywhere in expression string is encountered will concat that)
- All other operators JS converts string to number (if it has numeric content)

**NOTE :** NaN (not a number)- It is JS reserved word indicating a number is not a legal number.

``` js
let x = 100 / "Apple";  // Will give NaN
console.log(x, typeof(x));
console.log(x.__proto__);   // prototype for a number is Number
```

### Binary, octal, decimal, hexadecimal

JS interprets numeric constants as hexadecimal if they are preceded by 0x , and octal(in some JS versions) if preceded by 0.

``` js
let myNumber = 32;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
myNumber.toString(12);
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));  //converts nmbr to binary
```

### BigInt

- Safe integer range => 9007199254740991 to -9007199254740991 

``` js
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
console.log(typeof(x));
```

**NOTE :** 
1. Arithmetic between BigInt and Number is not allowed. 
2. A BigInt can not have decimals.
3. BigInt can also be written in hexadecimal, octal, or binary notation:
4. Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

####  Minimum and Maximum Safe Integers

1. to check - Number.isSafeInteger()
2. let x = Number.MAX_SAFE_INTEGER;
3. let y = Number.MIN_SAFE_INTEGER;

### Number methods

1. toString()  [if argument is not there it converts to decimal notation by default] [e.g. x.toString()]
2. toFixed() => returns string with number written with a specified number of decimals. [e.g. x.toFixed(2)]
3. toPrecision() => returns string with number written with a specified length. [e.g. x.toPrecision(6)]

#### Global methods for number
Number(), parseFloat(), parseInt()  // Convert any type of variable to number(if possible) otherwise returns NaN

#### Number object method
Number.isInteger(nmbr), Number.isSafeInteger(nmbr), Number.parseFloat(nmbr), Number.parseInt(nmbr)

### Number properties (Properties of Number object)

Number.MAX_VALUE; Number.MIN_VALUE; Number.POSITIVE_INFINITY; Number.NEGATIVE_INFINITY;

**NOTE :** MAX_VALUE return largest number possible; MAX_SAFE_INTEGER returns largest INTEGER possible.
