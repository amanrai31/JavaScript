# CONTENT => Class, Module

JS Classes are templates/blueprint for objects. Use "class" keyword to create a class also always add a method name constructor() inside, className should start with Capital letter and  Classes are always written in strict mode.

```js
class ClassName {
  constructor() { ... }
}
```

```js
class Car {

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
 age() {
    // date = new Date();  // This will not work as syntax in classes must be written in "strict mode".
    const date = new Date(); // This will work
    return date.getFullYear() - this.year;
  }
}

const car1 = new Car("Mahindra", 2018);
const car2 = new Car("Tata", 2020);

console.log(car1.age(), car2.age());
console.log(car1.age === car2.age);    // RETURNS TRUE AS age() SHARED ACROSS INSTANCES, RETURNS FALSE IF age() WAS INSIDE CONSTRUCTOR
```

**NOTE :** We do not declear f/n inside constructor cuz Every time class is instantiated, a new copy of that f/n is created for each obj. The same is true for object constructor f/n too, do not create f/n inside f/n constructor, instead that define f/n on prototype

#### The constructor method

- It has to have the exact name "constructor"
- The constructor method is called automatically when a new object is created.
- It is used to initialize object properties

**Important =>** Everything inside constructor is specific to that instance, & everything not in the constructor is added to prototype so it's not directly on instance it goes down to prototype chain to find those methods.

### Class inheritance 

Use "extend" keyword, child class inherits all methods from parent class. Inheritance is useful for code reusability.

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);                 // invokes the parent constructor, super is related to invoking parent constructor only(we have to invoke inorder to access parent's properties).
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;  // this inside a class represents the props of same class OR props of parent class
  }
}

let myCar = new Model("Ford", "Mustang");
let car = new Car("Tata");
console.log(myCar.show());
console.log(car.cnam);

```

**NOTE :** By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

**NOTE :** The name of the getter/setter method cannot be the same as the name of the property, in this case carname.

**NOTE :** Unlike functions, and other JS declarations, class declarations are not hoisted && always written in strict mode.

**NOTE :** If child & parent have same method, child's method will be used. (Method overriding).

### JS static methods

Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.

```js
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class
console.log(Car.hello()); //myCar.hello() - will raise error.
```

# Module

JS modules allow you to break up your code into separate files. This makes it easier to maintain a code-base. Modules are imported from external files with the "import" statement.

There are two types of exports: Named Exports and Default Exports.

- Named export
```
const name = "Jesse";
const age = 40;

export {name, age};
```

- Default export
```
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```

**NOTE :** Modules only work with the HTTP(s) protocol. We can have only one default export in a module file.
