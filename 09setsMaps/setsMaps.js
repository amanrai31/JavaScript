const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

console.log("type of sets - ", typeof letters, " || size of letters set - ", letters.size, " || is letters instance of sets?", letters instanceof Set);

let text = "";
for (const x of letters) {
  text += x + " ";
}

// has() method

console.log(letters.has("d"));

// values() method

const myIterator = letters.values()

for (const entity of myIterator){
    console.log(entity);
}

// MAPS

const fruits = new Map();

const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.get("apples"));
console.log("typeof map :", typeof fruits," || is fruits instance of maps?", fruits instanceof Map);

const mango = {name: 'mango'};
const kiwi = {name: 'kiwi'};              // object name is kiwi
const bananas = {name: 'bananas'};
fruits.set(mango, 100);
fruits.set(kiwi, 150);
fruits.set(bananas, 100);
console.log("kiwi",fruits.has(kiwi))

console.log(typeof "jhon", typeof 3.14, typeof 1234n, typeof true, typeof x, typeof Symbol() )
console.log("type of null is object",typeof null);  // This is a well-known bug in JS and has historical reasons.
