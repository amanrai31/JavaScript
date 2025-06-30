// Object methods

const fruits = {Bananas:300, Oranges:200, Apples:500};

// Object.entries(object) => returns an array of the key/value pairs from an object
const fruitEntries = Object.entries(fruits);
console.log("Array from object => ",fruitEntries);

let text = "";
for (let [fruit, value] of fruitEntries) {     // for-of loop works on array/entries(fruitEntries), not on object
  text += fruit + ": " + value + " ";
}
console.log(text)

const map1 = new Map(fruitEntries); // We can not create map from fruits Object cuz it is not iterable, fruitEntries is iterable. 
console.log("Map1 - ",map1);

// Object.fromEntries() => Returns object from entry/array
console.log("Object from entry/array", Object.fromEntries(fruitEntries));

// Object.values(object)
console.log("Values - ",Object.values(fruits))

// Object.keys(object)
console.log("Keys - ",Object.keys(fruits))

// Other methods - Object.fromEntries(iterableEntries/list), Object.assign(target,source)=> Both Creates shallow copy, Object.create(object) => See the diff b/w assign & create.

// --------------------------------------------------------------------------------------------

// Object.groupBy()
// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];
  
//   function myCallback({ quantity }) {                   //groupBy introduced in ES2024
//     return quantity > 200 ? "ok" : "low";
//   }
  
//   const result = Object.groupBy(fruits, myCallback);
  
//   let text ="These fruits are Ok: <br>";
//   for (let [x,y] of result.ok.entries()) {
//     text += y.name + " " + y.quantity + "<br>";
//   }
  
//   console.log(text)


const person = {
  firstName: "Rahul",
  lastName : "Yadav",
  language : "EN",
};

// Add a Property
Object.defineProperty(person, "yearOfBirth", {value:"2001"}); //This will not appear when you iterate obj in loop

console.log(person)  
// yearOfBirth is not showing cuz creates a property with default attributes that make it non-enumerable by default; 
console.log(person.yearOfBirth)

person.hobby = "cricket";  // Adding prop like this is enumerable/iterable

console.log(person)


// Change a property
Object.defineProperty(person, "language", {value : "NO"});

// Changing metadata
Object.defineProperty(person, "language", {writable:false});
Object.defineProperty(person, "language", {enumerable:false});

console.log(person) // language is not enumerable now.

// Object.getOwnPropertyNames(object)  -- gets all props enumerable and non-enumerable,
console.log(Object.getOwnPropertyNames(person)) // Object.keys() gets only enumerable props


// Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(person, "firstName"))

// Object.getPrototypeOf(object) - Accessing the prototype
console.log(Object.getPrototypeOf(person))

// getters and setters - get lang() {return this.language} OR set lang1(lang){ this.language = lang}
