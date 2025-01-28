### Function (A callable object)

A JavaScript function is a block of code designed to perform a particular task. (May return something and may not)
A function is executed when "something" invokes it (calls it).

**Use -** We can reuse code.

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
  console.log(parameter1); // This function is not returning anything
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);  // Returns a number value
}

let value = toCelsius; // Accessing a function without () returns the function object and not the function result.
```

### Object

Objects are containers for Properties(Props) and Behaviours(Methods). In JS almost everthing is object(KING OF JS).

Objects are non-premitive data type because they are **stored by ref**, that why **mutable**

**Notes -** Properties can be primitive values, functions, or even other objects.

Define JS object
- Object literal [ e.g. const personDetails = {name:"xyz", age:20}]  **recommended**
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
const myArray = Object.values(person);    // Creates array of property values

// Writes in JSON format ===> 3rd option
let myString = JSON.stringify(person);      // output - {"name":"John","age":30,"city":"New York"}


// Display the Text
document.getElementById("demo").innerHTML = text;
```

#### Object constructor/Object constructor function

Sometimes we need to create many objects of the same type. (Keep name of constructor function upper-case first letter.)

**Note:** We can not use arrow function as object constructor, it lacks "this" binding.

**Note:** Modern JS uses class for Object Constructor
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

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
```

We can **NOT** add new property to constructor function just like objects, to add new property(property/function) 

**NOTE:** But that will be constant for all Obj made out of this Object Constructor.
` Person.prototype.nationality = "Indian" `

But we can add new properties to objects=> ` myFather.height = "5.10" `

- Built-in constructors `new Object()`, `new Array()`, `new Set()`, `new Map()`,`new RegExp()`, `new Date()`, `new Function()`

**Note -** The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

**Note -** Use object literals {} instead of new Object(). Use array literals [] instead of new Array(). Use pattern literals /()/ instead of new RegExp(). Use function expressions () {} instead of new Function().

**Note -** WE CAN CONSIDER PROTOTYPES AS CLASS. Modern JS uses class for Object Constructor

# Global objects -Read about

## JavaScript Object Methods 

### 1. General methods

1. Object.assign(target, source) [Copies properties from a source object to a target object]
2. Object.create(object) [Creates an object from an existing object]
3. Object.fromEntries(iterableEntries) [Creates an object from a list/array of keys/values]
4. Object.entries(object) [Returns an array of the key/value pairs of an object]
5. Object.key(object) [Returns an array of the key of an object]
6. Object.value(object) [Returns an array of the value of an object]
7. Object.groupBy(object, callback) [Groups object elements according to a function]

### 2. Property Management Methods - Not that much of use

Every property in JS has internal attributes(metadata) [1. writable, 2. Enumerable, 3. configurable]
Value is also an attribute of property. 
** getters and setters**

### 3. Object Protection Methods

1. const car = {type:"Fiat", model:"500", color:"white"}; [const Prevents re-assignment]
2. Object.preventExtensions(object) [Prevents adding object properties]
3. Object.seal(object) [Prevents adding and deleting object properties]
4. Object.freeze(object) [Prevents any changes to an object]
5. Object.isExtensible(object), Object.isSealed(object), Object.isFrozen(object) 

