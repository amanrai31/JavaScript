//.Object declearation
const person = {
  name: "Aman",
  greet: function () {
    console.log("My name is " + this.name);
  }
};
// OR In short =>
const person1 = {
  name: "Aman",
  greet () {
    console.log("My name is " + this.name);
  }
};

// Object constructor, prototype

function Person(first, last, age, eye) {  // Object constructor (Can not use arrow f/n- do not bind this)
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;       
    this.language = "Hindi";   // Value given to a property will be default value for all objects, we can overwrite
}

const myBrother = new Person("Rahul", "Rai", 60, "black");
const myMother = new Person("Aish", "Rai", 48, "blue");

const brotherJson = JSON.stringify(myBrother);
const obj1 = myBrother;                    // Now any change in obj1 will change myBrother object as well, because they have the same reference. They are one now

console.log(brotherJson);
console.log(obj1==myBrother, obj1===myBrother);   // Because they point to the same reference. In all other cases comparing object will give false.

Person.prototype.height = "6";
Person.prototype.sayHello = function(){
    console.log("hello", this.firstName);
}

const mySelf = new Person("Aman", "Rai", 22, "black", "5.6" ); // But the height prototype will be constant to 6 (not 5.6), if you want to override this then do this explicitly => myself.height ="5.6"

mySelf.length = "5.10"  // We can add new props to perticular objects.

console.log("MySelf Object => ",mySelf) 

const mySelfJson = JSON.stringify(mySelf);

console.log("Myself JSON => ",mySelfJson);

console.log(Person.prototype);                  // Same as console.log(mySelf.__proto__);      

const personObj = {
    fname:"John",
    lname:"Doe",
    age: 25
  };
  let txt= "";
  for (let x in personObj) {          // loop will be executed once for each property, gives value of props => forin loop is for object.
    txt += personObj[x] + " ";
  }
console.log(txt)

// type User = {           // This is how we declare an object if we want to have type defined for props. Use of type|interface => Recommended
//   name: string;
//   age: number;          // Also learn about index signature, dynamic key in quotes => type test { [key:string] : string }, key could be id,prop or anything
//   greet: () => void/string/number;
// };

// const user: User = {
//   name: "Aman",
//   age: 25,
//   greet(){ console.log("My name is", this.name)}
// };

// OR Inline object typing (same as above)
// const user: {
//   name: string;
//   age: number;
// } = {
//   name: "Rahul",
//   age: 25,
// };
