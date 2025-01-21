console.log("hi")

const power = 2**3    // 2 to the power 3
console.log(power)  

console.log("5" + 3);  // + operator works 2 ways => 1. adds, 2. concate
console.log("5" - 3, "5"*3);

console.log(7%-3, -7%3) // Result of remainder depends on numerator sign.

const x= ~5;
console.log("NOT Bitwise of 5 is=>",x)  // Bitwise operates on 32bits

console.log("Type of power = ",typeof(power))

function Person(first, last, age, eye) {  // Object constructor
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;       // We can create a property with default value e.g. => this.language = "Hindi"
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

const fatherJson = JSON.stringify(myFather);

console.log(fatherJson);

Person.prototype.height = "6";

const mySelf = new Person("Aman", "Rai", 22, "black", "5.6" ); // But the height prototype will be constant to 6 (not 5.6)

const mySelfJson = JSON.stringify(mySelf);

console.log(mySelfJson);

console.log(Person.prototype)

mySelf.length = "5.6"  // We can add new props to perticular objects. 
console.log(mySelf)

// NOTE: We can not use arrow f/n as Object Contructor
// const objectConstructior = (name, age)=>{
// this.name = name;
// this.age = age;
// }
function objectConstructior(name, age){
    this.name = name;
    this.age = age;
    }
const obj1 = new objectConstructior("aman", 25);
console.log(obj1)
console.log(JSON.stringify(obj1));