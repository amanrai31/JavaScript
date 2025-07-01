# CONTENT => OBJECTS 

## Object

Objects are containers for Properties(Props) and Behaviors(Methods/functions). In JS almost everything is object(KING OF JS).

Objects are non-primitive data type (in key: value format) because they are **stored by ref**, that's why **mutable**

**Notes -** Properties can be primitive values, functions, or even other objects.

Define JS object 
- Object literal =>  ``` const personDetails = {name:"xyz", age:20} ``` =>  **recommended**
- using new keyword. [Usually when we make object from `Object Constructor` or `Class`]
- Using an Object Constructor

```ts
const obj : type = {...} //General syntax for obj in TS
```

#### Accessing Object Properties

```JS
objectName.propertyName

OR

objectName["propertyName"] // If key itself is in string form

OR

objectName[x]   // x here is expression e.g => let x = objectName.property/key i.e. x is key

```

**Note -** We can change, add and delete[delete objectName.property => will dlt key, value both.] object's props.

#### => Read about Nested object

#### => for-in loop on object, JSON.stringify(obj), passing object by reference => visit obj1.js

### Object constructor/Object constructor function

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
  this.fullName = function (){                     // NOT RECOMMENDED to declare f/n here, each obh will have it's own copy then.
    return this.firstName + " " + this.lastName;
  }
}

const myFather = new Person("BN", "Rai", 50, "Brown");
const myMother = new Person("Sush", "Rai", 48, "Black");
```

We can **NOT** add new property to constructor function just like objects, to add new property(property/function) 
` Person.prototype.nationality = "Indian" `

**NOTE:** But that will be constant  by default(can be override) for all Obj made out of this Object Constructor. We can explicitly override though.

` Person.prototype.fullname = function(){ console.log(this.firstName, this.lastName)} ` => RECOMMENDED way to define function inside constructor f/n using prototype. **Log this** => `console.log(Person.Prototype)`. It is similar to what we declare f/n outside of constructor in Classes. 


We can add new properties to objects=> ` myFather.height = "5.10" `

- Built-in constructors `new Object()`, `new Array()`, `new Set()`, `new Map()`,`new RegExp()`, `new Date()`, `new Function()`

**Note -** The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

**Note -** Use object literals {} instead of new Object(). Use array literals [] instead of new Array(). Use pattern literals /()/ instead of new RegExp(). Use function expressions () {} instead of new Function().

-----

### Global objects

The global Object is the top-level object in JS that provides access to global variables, functions, and built-in constructors & built in objects.

- In browsers: ```window``` is the global object. In Node.js: ```global``` is the global object.

**Key characteristics**

- Contains built-in objects like Math, JSON, etc.
- Contains global functions like parseInt, setTimeout, alert(browser only) etc.
- Also all the built in Object constructor functions (Array, Set, Map etc) are themselves defined inside Object(global Object).
- Holds user-defined global variables (e.g., var x = 10 makes x accessible via window.x)

-----

## JavaScript Object Methods 

### 1. General methods

1. Object.key(object) [Returns an array of the key of an object]
2. Object.value(object) [Returns an array of the value of an object]
3. Object.entries(object) [Returns an array of the key/value pairs of an object]
4. Object.fromEntries(iterableEntries) [Creates an object from a list/array of keys/values]
5. Object.assign(target, source) [Copies properties from a source object to a target object]
6. Object.create(object) [creates an empty object inheriting all props from other Object, but has no own props]
7. Object.groupBy(object, callback) [Groups object elements according to a function]

### 2. Property Management Methods - Not that much of use

Every property in JS has internal attributes(metadata) [1. writable, 2. Enumerable(iterable) 3. configurable]
Value is also an attribute of property. 
** getters and setters**
1. Object.defineProperty(object, property, descriptor) [adds new prop to obj, can change prop's value & metadata & getters/setters.]
2. Object.getOwnPropertyDescriptor(object, property) -- [Accessing a Property]
3. Object.getOwnPropertyNames(object) -- [Similar to Object.keys(obj) => Returns all(enumerable and non-enumerable) props as an array ]
4. Object.getPrototypeOf(object) -- [ Accessing the prototype ] => All the f/n defined in prototype(outside constructor) 

### 3. Object Protection Methods

1. const car = {type:"Fiat", model:"500", color:"white"}; [const Prevents re-assignment]
2. Object.preventExtensions(object) [Prevents adding object properties]
3. Object.seal(object) [Prevents adding and deleting object properties]
4. Object.freeze(object) [Prevents any changes to an object, makes objects read only]
5. Object.isExtensible(object), Object.isSealed(object), Object.isFrozen(object) 

**SHALLOW copy VS DEEP copy => 4exeObj.js**
-----

JS objects have a special property called prototype(itself an object). console.log any object and you can see. This prototype has all the in-built properties and methods regarding "that object".

```js
const employee = {
calculateTax(){
console.log("tax rate is 25%")
}
}

const emp1 ={
salary: 60000;
}
console.log(emp1.__proto__);
emp1.__proto__ = employee;    // emp1 object will get all the props & methods of employee inside it's prototype

```
