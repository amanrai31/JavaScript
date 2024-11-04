console.log("hi")
console.log(2**3)

const x= ~5;
console.log("NOT Bitwise of 5 is=>",x)

function Person(first, last, age, eye) {
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

const mySelf = new Person("Aman", "Rai", 22, "black", "5.6" );

const mySelfJson = JSON.stringify(mySelf);

console.log(mySelfJson);

console.log(Person.prototype)