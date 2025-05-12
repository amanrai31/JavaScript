# CONTENT => Sets, Maps, typeof, Destructuring

## Sets

A JS Set is a collection of unique values. The values can be of any type, primitive values or objects.

**How to create a set**

- Passing an array to new Set() constructor
- Create an empty set and use add() to add values

```
const letters = new Set(["a","b","c"]);
```

```
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters.sie);
```

- If we add something that already exit in set, only the first occurrence will be saved.

### JS Set methods

- listing set elements

```
const letters = new Set(["a","b","c"]);

let text = "";
for (const x of letters) {
  text += x;
}
```

- has() method => Returns true if a specified value exists in a Set.

- values() method => returns an Iterator object with the values in a Set.

- keys() method => returns an Iterator object with the values in a Set.

**NOTE :** A Set has no keys, so keys() returns the same as values().

## Maps

A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.

**How to Create a Map**

- Passing an Array to new Map()
- Create a Map and use Map.set()

```js
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```

```js
// Create a Map
const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
```
- **get() method** => gets the value of a key in a map.

```
fruits.get("apples");    // Returns 500
```

**Differences between JavaScript Objects and Maps** => Maps are directly iterable, have a size property, keys can have any datatype (objects keys must be string), keys are ordered by insertion, do not have default keys.

### JS map methods

- new Map()
- map.set()
- map.get()
- map.size()
- map.delete() ``` map.delete(key)```

- map.clear() => removes all the elements from the map

- map.has() => returns true if a key exists in a map.

- map.keys(), map.values(), map.entries(), map.forEach();

#### Objects as Keys

```
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
```

----

# CONTENT => typeof, type conversion

Primitive data-types (value with no props or methods, passed by value)

- string, number, bigint, boolean, null, undefined, symbol

```
console.log(typeof "jhon", typeof 3.14, typeof 1234n, typeof true, typeof x, typeof Symbol() )
console.log(typeof null);
```

All other complex types like arrays, functions, sets, and maps are just different types of objects.
The typeof operator returns only two types

- object
- function

```
typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()     //returns object
typeof NaN           // returns number

typeof function (){}   // Returns function
```

**NOTE :** The typeof operator returns object for all types of objects => object, array, sets, maps. You can not use "typeof" to determine if a JS object is an array or a date. We can use **instanceof** operator to find this.

```
null === undefined //false
null == undefined //true
```

### type conversion

```js
let x = Number('John'); // x will be NaN, type of x will be number

```

### Destructuring

- Object Destructuring

```js
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;

// Destructuring
let {firstName, lastName, country = "US"} = person; 
```

- Array Destructuring

```js
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
```

- the res property (This syntax will store all remaining values into a new array)

```js
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers
```