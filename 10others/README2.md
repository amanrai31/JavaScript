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


**NOTE : Automatically Global**

If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

```js
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";       // carName is not decleared here, directly initialized.
}
```

**NOTE :** In "Strict Mode", undeclared variables are not automatically global.

**NOTE :** Do NOT create global variables unless you intend to. Your global variables (or functions) can overwrite window variables (or functions). Any function, including the window object, can overwrite your global variables and functions.










