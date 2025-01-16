## Content => DATA TYPES, FUNCTIONS, OBJECTS**
### Data Types (8)

1. Number (64 bits, 15-17 digit precision)
2. bigint [let bigInt = 20n; Used on integers only, arbitary pricision(unless ur memory fulls)]
3. boolean
4. string
5. object
6. undefined [ let car;    // Value is undefined, type is undefined ]
7. null
7. symbol


**Note -** A variable declared without a value will have the value undefined.

```JS
let x = 16 + 4 + "Volvo";  // 20volvo
let x = "Volvo" + 16 + 4;  // Volvo164 (Once it encounters string, will treat next as string.)

```
### Function

A JavaScript function is a block of code designed to perform a particular task. (May return something and may not)
A function is executed when "something" invokes it (calls it).

**Use -** We can reuse code.

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius; // Accessing a function without () returns the function object and not the function result.
```

### Object

Objects are containers for Properties(Props) and Behaviours(Methods). In JS almost everthing is object(KING OF JS).

**Notes -** Properties can be primitive values, functions, or even other objects.

Define JS object
- Object literal [ e.g. const personDetails = {name:"xyz", age:20}]  **recommended**
- using new keyword. [Usually when we make object from Object Constructor]
- Using an Object Constructor

#### Accessing Object Properties

```JS
objectName.propertyName

OR

objectName["propertyName"]

OR

objectName[x]   // x here is expression e.g => let x = objectName.property then objectName[x]

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
  this.eyeColor = eye;       // We can create a property with default value e.g. => this.language = "Hindi"
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
