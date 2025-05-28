# CONTENT => Scope, Strict, this, JSON, debugging

### Scope

Scope determines the accessibility/visibility of variables.

#### Block scope (Newer)

ES6 introduced two important new JS keywords: let and const. These two keywords provide Block Scope in JS. Variables(let & const) declared inside a { } block cannot be accessed from outside the block.

**NOTE :** var do not respect block scope, var only respects f/n block

#### Function scope

JS has function scope: Each function creates a new scope. Variables defined inside a function are not accessible from outside the function. var, let and const are quite similar when declared inside a function. **Local variables have f/n scope** . Local variables are created when a function starts, and deleted when the function is completed.

#### Global scope

Variables declared Globally (outside any function/block) have Global Scope. Global variables can be accessed from anywhere in a JS program.

**NOTE :** Do NOT create global variables unless you intend to. Your global variables (or functions) can overwrite window variables (or functions). Any function, including the window object, can overwrite your global variables and functions.

If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

**NOTE :** In "Strict Mode", undeclared variables are not automatically global.

```js
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";            // directly Initialized, so treated as global scope.
}
```

-----

### Hoisting

Hoisting is JavaScript's default behavior of moving all **declarations** to the top of the current scope (to the top of the current script or the current function). JS do not hoist Initializations. So Initialize your variable (var) and then you can use it and then declear it.  


JS technically hosit every declarations, but in case of let & const the block of code is aware of declarations but still it can not use until it is literally decleared.

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


















