# CONTENT => Class

JS Classes are templates for objects. Use "class" keyword to create a class also always add a method name constructor() inside.

```js
class ClassName {
  constructor() { ... }
}
```

**NOTE :** JS class is not an object, it is template for JS objects.

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

const car1 = new Car(Mahindra, 2018);
const car2 = new Car(Tata, 2020);

console.log(car1.age());

```

#### The constructor method

- It has to have the exact name "constructor"
- The constructor method is called automatically when a new object is created.
- It is used to initialize object properties

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
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
let car = new Car("Tata");
console.log(myCar.show());
console.log(car.cnam);

```

**NOTE :** By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
**NOTE :** The name of the getter/setter method cannot be the same as the name of the property, in this case carname.

**NOTE :** Unlike functions, and other JS declarations, class declarations are not hoisted.

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