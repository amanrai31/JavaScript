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

