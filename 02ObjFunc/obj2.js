// Object methods

// Object.entries(object) => returns an array of the key/value pairs in an object
const fruits = {Bananas:300, Oranges:200, Apples:500};

const fruitEntries = Object.entries(fruits);
console.log(fruitEntries);

let text = "";
for (let [fruit, value] of fruitEntries) {
  text += fruit + ": " + value + " ";
}
console.log(text)

const map1 = new Map(fruitEntries);
console.log(map1);

// Object.values(object)
console.log(Object.values(fruits))

// Object.keys(object)

console.log(Object.keys(fruits))


// Other methods - Object.fromEntries(iterableEntries/list), Object.asign(target,source), Object.create(object)

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