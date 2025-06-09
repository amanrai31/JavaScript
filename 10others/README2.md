# CONTENT => Scope, Strict, this, JSON, WebAPI

### Scope

Scope determines the accessibility/visibility of variables.

#### Block scope (Newer)

ES6 introduced two important new JS keywords: let and const. These two keywords provide Block Scope in JS. Variables(let & const) declared inside a { } block cannot be accessed from outside the block.

1. let => Block Scope, cannot be Redeclared in the same scope, can be reassign
2. const => Block Scope, cannot be Redeclared in the same scope, **can'nt be reassign**, must be assign a value when declared. It does not define a constant value. It defines a constant reference to a value. Means we can'nt Reassign a constant array but can change elements of array(same for objects)
3. var => Global scope, can be Redeclared. var do not respect block scope(can be accessed outside block), var only respects f/n block.

**Note -** let and const does not bind ```this```.

``` js
const cars = ["Saab", "Volvo", "BMW"];  // We can not reassign this const array but can change the elements of array. 

cars = ["Toyota", "Volvo", "Audi"];    // ERROR 
```

#### Function scope

JS has function scope: Each function creates a new scope. Variables defined inside a function are not accessible from outside the function. var, let and const are quite similar when declared inside a function. **Local variables have f/n scope** . Local variables are created when a function starts, and deleted when the function is completed.

#### Global scope

Variables declared Globally (outside any function/block) have Global Scope. Global variables can be accessed from anywhere in a JS program.

**NOTE :** Do NOT create global variables unless you intend to. Your global variables (or functions) can overwrite window variables (or functions). Any function, including the window object, can overwrite your global variables and functions.

If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

**NOTE :** In "Strict Mode", undeclared variables are not automatically global. You have to declear otherwise ReferenceError occur.

```js
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";            // directly Initialized, so treated as global scope.
}
```

-----

### Hoisting

Hoisting is JavaScript's default behavior of moving all **declarations** to the top of the current scope (to the top of the current script or the current function). JS do not hoist Initializations. So Initialize your variable (var) and then you can use it and then declared it.  


JS technically hoist every declarations, but in case of let & const the block of code is aware of declarations but still it can not use until it is literally declared.

Function are also hoisted but the arrow function are not hoisted also class is not hoisted too.

-----

### strict mode  => "use strict";

Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode). 

**NOTE :** The "use strict" directive is only recognized at the beginning of a script or a function.

#### What it does not allow

- Using a variable, without declaring it, is not allowed.
- Deleting a variable (or object) is not allowed.
- Duplicating a parameter name is not allowed.  ```js function x(p1, p1) {}; ```
- Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode (like - implement, public, static,protected, private, pakage etc.)

-----

### this

In JS, the this keyword refers to an *object*. The this keyword refers to different objects depending on how it is used.

- In an object method, this refers to the object.
- Alone, this refers to the global object.
- In a f/n(which is defined globally, not object f/n), this refers to the global object.
- In a f/n, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.

```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName; // i.e. this.firstName is the firstName property of this (the person object)
  }
  myFunc: function(){
    return this;     // returns whole object
  };
```

```js
console.log(this); // In a browser window the global object is [object Window]

//OR

function myFunction() {
  return this;            // global object i.e. object window in browser
}
```

```js
"use strict";
function myFunction() {
  return this;           // this is undefined
}
```

```js
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
person1.fullName.call(person2); // call() & apply() methods used to call an object method with another object as argument
```

--------

### JSON (JavaScript Object Notation)

It is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page. JSON is language independent.

```json
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}
```

JS built-in function JSON.parse() converts the string into a JavaScript object. JSON.stringify(obj) => converts object to JSON.

-----

### Good practices

if (typeof myObj !== "undefined" && myObj !== null) **use undefined check before null**

```js
for(let i=0; i<arr.length;i++){     // BAD
}
```

```js
let l =arr.length;
for(let i=0; i<l;i++){     // GOOD
}
```

-----

### WebAPIs

A Web API is an API for the Web. 

#### web API
 Any API available over the web (i.e., HTTP) to let applications communicate. Used by browser, mobile, backend

REST APIs/ GraphQL provided by backend servers 
Third-party services like GitHub API, Twitter API, etc.


#### A Browser API 
APIs provided by the browser to help web developers interact with browser features, extend the functionality of a web browser.

- fetch()
- localStorage() => [no expiration date => localStorage.setItem("name", "John Doe");], sessionStorage() => [The data is deleted when the browser is closed]
- DOM API - document.querySelector()
- GeoLocation API, WebRTC, Canvas API, Notification API

**So we can say all browser API are web API, vice versa not true** 

- Web history API => back, forward, go, length => window.history.back() [1 page back], window.history.go(-2) [2 page back], 

