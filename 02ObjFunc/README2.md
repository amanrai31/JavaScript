# CONTENT => Function

## Function (A callable object)

A JavaScript function is a block of code designed to perform a particular task. (May return something and may not)
A function is executed when "something" invokes it (calls it).

**Use -** We can reuse code.

``` js
function name(parameter1, parameter2, parameter3) {  
  console.log(parameter1); // This function is not returning anything
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);  // Returns a number value
}

let value = toCelsius; // Accessing a function without () returns the function object and not the function result.

console.log(typeof(value));
console.log(value(110);

```

OR JS f/n can also be defined using an expression (Function expression)

``` js
const x = function (a, b) {return a * b};   
let z = x(4, 3);          // After a function expression has been stored in a variable, the variable can be used as function

```

**NOTE :** Hoisting applies to variable declarations(using var only) and to f/n declarations(not for arrow f/n). In Hoisting we can use variable(var)/function before declaration, and after use we can declear => READ MORE IN CHAPTER 10.

**NOTE :** The *typeof* operator in JavaScript returns "function" for functions.

``` js
// Arrow f/n
const x = (x, y) => x * y;    
// Arrow f/n do not bind "this" (Cannot be used as Obj constructor), also cannot be hoisted, it does not have arguments object.

```

Self invoking f/n OR Immediately Invoked Function Expression (IIFE) - Can be called only once.

``` js
(() => {                   //We can have named IIFE, IIFE can take parameters, IIFE can be async/await.
    console.log("IIFE with Arrow Function");  
})();

const mutliply = ((x,y) => { return x*y})(4,5);
```

### F/n parameters and arguments

1. A JS f/n does not perform any checking on parameter values (arguments).
2. JS f/n definitions do not specify data types for parameters.
3. JS f/n do not check the number of arguments received.
4. If a function is called with missing arguments (less than declared), the missing values are set to *undefined*.
5. If argumants are more than decleared params, then use argument object or (...args)

**NOTE :** Parameters are inside Function defination, arguments are inside function call

#### Default parameter values

``` js
function myFunction(x, y = 10) {   // If y is not passed or undefined, then y=10
  return x + y;
}
myFunction(5);
```

#### The Arguments object

If a f/n is called with too many arguments (more than declared), these arguments () can be reached using the arguments object.The argument object contains an array of the arguments used when the function was called. 

**NOTE :** Arrow f/n does not support arguments object - use Rest parameter

``` js
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  console.log("arguments object =>", arguments)
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];                          // arguments object(build in Obj) (seems like array but not actually array)
  }
  return sum;
}
```


#### F/n rest parameter (Modern JS preference)

``` js
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

**Note :** JS arguments are passed by value(primitives) so does't change the parameter's original value. Changes to arguments are not visible outside the f/n.

**Note :** Objects as JS arguments passed by ref, it changes the original value.

- In HTML the default global object is the HTML page itself, so the f/n above "belongs" to the HTML page.

- In a browser the page object is the browser window. The f/n above automatically becomes a window function.

- In JS all f/n are object methods, if a f/n is not a method of a JS object, it is a f/n of the global object


#### "this" in f/n and methods (Chapter 10)

### F/n closures (Closure = Function + Lexical Environment)

- Closure is a f/n that remembers the variables from its lexical (outer) scope even after the outer function has finished executing
- A closure locks the environment where it was created and carries it forever.
- Encapsulation via closures or private fields.
  
```js
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const myFunc = outer();  // outer runs once and returns inner
console.log("Closure =>",myFunc());
myFunc(); // 1
myFunc(); // 2
myFunc(); // 3


```

**Note :** Undeclared variables (created without var/let/const), are always global, even if they are created inside a f/n.

#### TS function with parameters (interface)

```ts
interface User {
  name: string;
  age?: number;
}

function greet(user: User) {
  const age = user.age ?? 18; // Want to give a default value(incase age is undefined => make that parameter optional inside interface
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet({name: "Aman"}); // Hello, Aman. You are 18 years old.
```

**NOTE :** There is slight diff b/w method & function. When we bind a function with an object it becomes a method. Like all the built in methods or function defined inside an object.
