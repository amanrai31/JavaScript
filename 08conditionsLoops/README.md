
# CONTENT => Comparison, if-else, switch, LOOPS

## Boolean

Everything With a "Value" is True e.g. => 100, 3.14, "aman", "false", 7 + 8.8.

Everything Without a "Value" is False e.g. => 0, -0, "", null, undefined, NaN, false.

**NOTE :** Comparing two JavaScript objects always return false.

### Comparison & Logical Operators

Comparison Operators => ==, ===, !=, !==, >, >=, <, <=

Logical Operators => &&, ||, !

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

- **for loop**
```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

**NOTE :**  (All 3 expressions are optional, for 1st we can declare outside/before loop, for 2nd we can add break condition inside loop, for 3rd we can add condition inside loop)

- **for in loop** (The JS for in loops through the properties of an Object, used to access value with the key)

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

**NOTE :** Try not to use for-in loop over array if index order is important. The index order is implementation-dependent, and array values may not be accessed in the order you expect, better to use 'for'/'for-of'/arr.forEach() when order is important.

- **arr.forEach()** [forEach() method calls a function (a callback function) once for each array element]

```
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {     // Takes 3 arguments, 1- the item value, 2- the item index, 3- the array itself.
  txt += value;
}

// or
numbers.forEach((value)=> txt += value);
```

- **for of loop** (loops through the values of an iterable object)

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more


```
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}
```

- **while loop** 

```
while (condition) {
  // code block to be executed
}
```

- **do-while loop** (executes the loop atleast once)

```
do {
  // code block to be executed
}
while (condition);
```

### JS break & continue

- The break statement "jumps out" of a loop.

- The continue statement "jumps over" one iteration in the loop.

**NOTE :** With a label reference, the break statement can be used to jump out of any code block.

```
const fruits = ['Apple', 'Banana', 'Cherry'];
let x = '';
myfavorite: {
  x = fruits[0];
  break myfavorite;
  x = fruits[1];
  x = fruits[2];
}
alert(x);
```

### JS Iterables

Iterables are iterable objects (like Arrays, strings, sets,maps,). Iterables can be iterated over with for..of loops.

Iterables must implement the Symbol.iterator method. String, Array, TypedArray, Map and Set are all iterables, because their prototype objects have a Symbol.iterator method.

- The Symbol.iterator is a function that returns a next() function.

```
// Create an Object. Custom iterable object.
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
