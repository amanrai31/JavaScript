# CONTENT => DATE & MATH

```
const d = new Date(); // creates a date object with the current date and time
```
```
const cd = new Date("2022-03-25"); // creates a date object from a date string
```

Date objects are static. The computer clock is ticking, date objects are not.JS  will use the browser's time zone and display a date as a full text string using toString() method.

new Date(year, month, ...) creates a date object with a specified date and time. There should be 2params for year & month, if you give only 1 then that will be treated as millisecond.

```
const d = new Date(2018, 11, 24, 10, 33, 30, 0); // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

const d = new Date(2018, 11);

const d = new Date(2018); // Will take 2018 as milliseconds.
```

**NOTE :** JS counts months from 0 to 11. January = 0, December = 11. 
**NOTE :** Specifying a month/day higher than 11, will not result in an error but add the overflow to the next year.
**NOTE :** One and two digit years will be interpreted as 19xx. ```const d = new Date(99, 11, 24);```.  ```const d = new Date(9, 11, 24);```.
**NOTE :** JS stores dates as number of milliseconds since January 01, 1970. Zero time is January 01, 1970 00:00:00 UTC.

**NOTE :** UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

### Date get methods

getFullYear()	=> Get year as a four digit number (yyyy) ``` const d = new Date(); const y = d.getFullYear()```
getMonth()	=> Get month as a number (0-11) [ January is month number 0, & December is month number 11]
getDate()	=> Get day as a number (1-31)
getDay()	=> Get weekday as a number (0-6) [sunday is 0]
getHours() =>	Get hour (0-23)
getMinutes()	=> Get minute (0-59)
getSeconds() =>	Get second (0-59)
getMilliseconds() =>	Get millisecond (0-999)
getTime()	=> Get time (milliseconds since January 1, 1970)

**NOTE :** The get methods above return Local time.

**NOTE :** The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time. ```let diff = d.getTimezoneOffset();```

Same goes with set Methods

```
const d = new Date("January 01, 2025");
d.setDate(d.getDate() + 50);  // Adds days to a date.
```

# Math

The JS Math object allows you to perform mathematical tasks on numbers.Unlike other objects, the Math object has no constructor. The Math object is static. All methods and properties can be used without creating a Math object first.

### Math properties [Math.property]

- Math.E        // returns Euler's number
- Math.PI       // returns PI
- Math.SQRT2    // returns the square root of 2
- Math.SQRT1_2  // returns the square root of 1/2
- Math.LN2      // returns the natural logarithm of 2
- Math.LN10     // returns the natural logarithm of 10
- Math.LOG2E    // returns base 2 logarithm of E
- Math.LOG10E   // returns base 10 logarithm of E

### Math methods [Math.method(number)]

- Math.round(x)  	// Returns x rounded to its nearest integer
- Math.ceil(x)	  // Returns x rounded up to its nearest integer
- Math.floor(x)	  // Returns x rounded down to its nearest integer
- Math.trunc(x)	  // Returns the integer part of x (new in ES6)


- Math.pow(x, y)   // returns the value of x to the power of y
- Math.sqrt(x)    // returns the square root of x
- Math.abs(x)     // returns the absolute (positive) value of x
- Math.sin(x)/ Math.cos(x)  // returns the sine/cosine (a value between -1 and 1) of the angle x (given in radians).
- Math.min()/ Math.max()  // used to find the lowest or highest value in a list of arguments. [Math.min(0, 150, 30, 20, -8, -200);]
- Math.log(x)         // returns the natural logarithm of x
- Math.log2(x)        // returns the base 2 logarithm of x.

### Math.random()

Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).

```
Math.floor(Math.random() * 10); // Returns a random integer from 0 to 9
Math.floor(Math.random() * 11); // Returns a random integer from 0 to 10
Math.floor(Math.random() * 10) + 1; // // Returns a random integer from 1 to 10
```

```
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
// This JS function always returns a random number between min (included) and max (excluded).
```

---

# CONTENT => Comparision, if-else, switch

## Boolean

Everything With a "Value" is True e.g. => 100, 3.14, "aman", "false", 7 + 8.8.

Everything Without a "Value" is False e.g. => 0, -0, "", null, undefined, NaN, false.

**NOTE :** Comparing two JavaScript objects always return false.

### Comparison & Locgical Operators

Comparison Operators => ==, ===, !=, !==, >, >=, <, <=

Locgical Operators => &&, ||, !

Conditional (Ternary) Operator => variablename = (condition) ? value1:value2 

**NOTE :** To secure a proper result, variables should be converted to the proper type before comparison:

The Nullish Coalescing Operator (??) => returns the first argument if it is not nullish (null or undefined), otherwise it returns the second argument.

The Optional Chaining Operator (?.) => returns undefined if an object is undefined or null (instead of throwing an error).

```js
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
console.log(car?.name); // Returns undefined, not some error.
```

### Conditional Statements

- if
- else
- else if
- switch

**switch :** The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed. If there is no match, the default code block is executed.
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

**NOTE :** If default is not the last case in the switch block, remember to end the default case with a break. Here default is last case so breaking the switch not needed.

Sometimes you will want different switch cases to use the same code.
```
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

**NOTE :** Switch cases use strict comparison (===). The values must be of the same type to match

---

### LOOPS

- for loop
```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

**NOTE :**  (All 3 expressions are optional, for 1st we can declear outside/before loop, for 2nd we can add break condition inside loop, for 3rd we can add condition inside loop)

- for in loop (The JS for in loops through the properties of an Object, used to access value of the key)

```
for (key in object) {
  // code block to be executed
}
```

```
const person = {fname:"Aman", lname:"Rai", age:24};

let text = "";
for (let x in person) {
  text += person[x];
}
```

**NOTE :** Try not to use for-in loop over array if index order is important. The index order is implementation-dependent, and array values may not be accessed in the order you expect, better to use 'for'/'for-of'/Array.forEach() when order is important.



















