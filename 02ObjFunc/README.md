# CONTENT => OBJECTS AND FUNCTIONS

## Object

Objects are containers for Properties(Props) and Behaviours(Methods/functions). In JS almost everthing is object(KING OF JS).

Objects are non-premitive data type because they are **stored by ref**, that's why **mutable**

**Notes -** Properties can be primitive values, functions, or even other objects.

Define JS object
- Object literal =>  ```js const personDetails = {name:"xyz", age:20} ``` =>  **recommended**
- using new keyword. [Usually when we make object from Object Constructor or class]
- Using an Object Constructor

#### Accessing Object Properties

```JS
objectName.propertyName

OR

objectName["propertyName"] // If key itself is in string form

OR

objectName[x]   // x here is expression e.g => let x = objectName.property/key then objectName[x]

```
#### Object methods

```JS
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;    // Use of this - this refers to the person object
  }
};

```

**Note -** JS objects are mutable

```JS
const x = person;
```
Here the object x is not a copy of person. The object x is person. Any changes to x will also change person.

**Note -** We can change, add and delete[delete objectName.property => will dlt key, value both.] object's props.

#### Read about Nested object

#### Display objects

```JS
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text  ===> 1st method
let text = "";
for (let x in person) {   // x is key
  text += person[x] + " ";
};

// Create an Array  ===> 2nd method
const myArray = Object.values(person);    // Creates array of property's values

// Writes in JSON format ===> 3rd option
let myString = JSON.stringify(person);      // output - {"name":"John","age":30,"city":"New York"}


// Display the Text
document.getElementById("demo").innerHTML = text;
```

#### Object constructor/Object constructor function

Sometimes we need to create many objects of the same type. (Keep name of constructor function upper-case first letter.)

**Note:** We can not use arrow function as object constructor, it lacks "this" binding.

**Note:** WE CAN CONSIDER PROTOTYPES AS CLASS. Modern JS uses class for Object Constructor.
```JS
function Person(first, last, age, eye) { // We can not use arrow function as object constructor
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;       
  this.language = "Hindi";   // Value given to a property will be default value for all objects
  this.fullName = function (){
    return this.firstName + " " + this.lastName;
  }
}

const myFather = new Person("BN", "Rai", 50, "Brown");
const myMother = new Person("Sush", "Rai", 48, "Black");
```

We can **NOT** add new property to constructor function just like objects, to add new property(property/function) 

**NOTE:** But that will be constant for all Obj made out of this Object Constructor.
` Person.prototype.nationality = "Indian" `

But we can add new properties to objects=> ` myFather.height = "5.10" `

- Built-in constructors `new Object()`, `new Array()`, `new Set()`, `new Map()`,`new RegExp()`, `new Date()`, `new Function()`

**Note -** The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

**Note -** Use object literals {} instead of new Object(). Use array literals [] instead of new Array(). Use pattern literals /()/ instead of new RegExp(). Use function expressions () {} instead of new Function().

# Global objects - Read about

## JavaScript Object Methods 

### 1. General methods

1. Object.key(object) [Returns an array of the key of an object]
2. Object.value(object) [Returns an array of the value of an object]
3. Object.entries(object) [Returns an array of the key/value pairs of an object]
4. Object.fromEntries(iterableEntries) [Creates an object from a list/array of keys/values]
5. Object.assign(target, source) [Copies properties from a source object to a target object]
6. Object.create(object) [Creates an object from an existing object]
7. Object.groupBy(object, callback) [Groups object elements according to a function]

### 2. Property Management Methods - Not that much of use

Every property in JS has internal attributes(metadata) [1. writable, 2. Enumerable(iterable) 3. configurable]
Value is also an attribute of property. 
** getters and setters**
1. Object.defineProperty(object, property, descriptor) [adds new prop to obj, can change prop's value & metadata & getters/setters.]
2. Object.getOwnPropertyDescriptor(object, property) -- [Accessing a Property]
3. Object.getOwnPropertyNames(object) -- [Returns all properties as an array]
4. Object.getPrototypeOf(object) -- [ Accessing the prototype ]

### 3. Object Protection Methods

1. const car = {type:"Fiat", model:"500", color:"white"}; [const Prevents re-assignment]
2. Object.preventExtensions(object) [Prevents adding object properties]
3. Object.seal(object) [Prevents adding and deleting object properties]
4. Object.freeze(object) [Prevents any changes to an object, makes objects read only]
5. Object.isExtensible(object), Object.isSealed(object), Object.isFrozen(object) 




## Function (A callable object)

A JavaScript function is a block of code designed to perform a particular task. (May return something and may not)
A function is executed when "something" invokes it (calls it).

**Use -** We can reuse code.

``` js
function name(parameter1, parameter2, parameter3) {  // 
  // code to be executed
  console.log(parameter1); // This function is not returning anything
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);  // Returns a number value
}

let value = toCelsius; // Accessing a function without () returns the function object and not the function result.
```

OR JS f/n can also be defined using an expression (Function expression)

``` js
const x = function (a, b) {return a * b};       // OR :  const x = (a, b) => {return a*b}
let z = x(4, 3);          // After a function expression has been stored in a variable, the variable can be used as function

```

**NOTE :** Hoisting applies to variable declarations(using var only) and to f/n declarations(not for arrow f/n). Hoisting is JS default behavior of moving declarations to the top of the current scope. (In Hoisting we can use variable(var)/function before declaration, and after use we can declear ) => READ MORE IN CHAPTER 10.

**NOTE :** The *typeof* operator in JavaScript returns "function" for functions.

``` js
// Arrow f/n
const x = (x, y) => x * y;    
// Arrow f/n do not bind "this" (Cannot be used as Obj constructor), also cannot be hoisted, it does not have arguments object.

```

Self invoking f/n OR Immediately Invoked Function Expression (IIFE) - Can be called only once.

``` js
(() => {                  // //We can have named IIFE, IIFE can take parameters, IIFE can be async/await.
    console.log("IIFE with Arrow Function");  
})();
```

### F/n parameters and arguments

1. A JS f/n does not perform any checking on parameter values (arguments).
2. JS f/n definitions do not specify data types for parameters.
3. JS f/n do not check the number of arguments received.
4. If a function is called with missing arguments (less than declared), the missing values are set to *undefined*.

#### Default parameter values

``` js
function myFunction(x, y = 10) {   // If y is not passed or undefined, then y=10
  return x + y;
}
myFunction(5);
```

#### The Arguments object

JS f/n have a build in object called arguments object. The argument object contains an array of the arguments used when the function was called. (Arrow f/n does not support arguments object - use Rest parameter)

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
**NOTE :** If a f/n is called with too many arguments (more than declared), these arguments () can be reached using the arguments object.

#### F/n rest parameter (Modern JS preference)

``` js
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

**Note :** JS arguments are passed by value(primitives) so it does not change the parameter's original value. Changes to arguments are not visible outside the f/n.

**Note :** Objects as JS arguments passed by ref, it changes the original value.

- Normal f/n does not belong to any object, but in JS there is always a default global object.

- In HTML the default global object is the HTML page itself, so the f/n above "belongs" to the HTML page.

- In a browser the page object is the browser window. The f/n above automatically becomes a window function.

- In JS all f/n are object methods, if a f/n is not a method of a JS object, it is a f/n of the global object


#### "this" in f/n and methods

- In an object method(f/n), this refers to the object(in which that f/n is declared). 
- Alone, this refers to the global object.
- In a function(in normal f/n declared outside of any object), this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.



#### F/n closures
- A f/n can access all variables inside its local scope
- A function can access all variables in the global scope:

**Note :** Undeclared variables (created without var/let/const), are always global, even if they are created inside a f/n.
