// Object constructor, prototype

function Person(first, last, age, eye) {  // Object constructor (Can not use arrow f/n- do not bind this)
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;       
    this.language = "Hindi";   // Value given to a property will be default value for all objects
}

const myFather = new Person("BN", "Rai", 60, "black");
const myMother = new Person("Aish", "Rai", 48, "blue");

const fatherJson = JSON.stringify(myFather);

console.log(fatherJson);

Person.prototype.height = "6";

const mySelf = new Person("Aman", "Rai", 22, "black", "5.6" ); // But the height prototype will be constant to 6 (not 5.6)

mySelf.length = "5.10"  // We can add new props to perticular objects.

console.log("MySelf Object => ",mySelf) 

const mySelfJson = JSON.stringify(mySelf);

console.log("Myself JSON => ",mySelfJson);

console.log(Person.prototype)

console.log("My father array from object=>",Object.entries(myFather))  // Create array/list from object
console.log("My father object from array=>",Object.fromEntries(Object.entries(myFather))) // Create obj from list/array.
console.log("My father value", Object.values(myFather))  // Object.values
console.log("My father value", Object.keys(myFather))   // Object.keys

const person = {
    fname:"John",
    lname:"Doe",
    age: 25
  };
  let txt= "";
  for (let x in person) {          // loop will be executed once for each property. (gives value of props)
    txt += person[x] + " ";
  }
  console.log(txt)