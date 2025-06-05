function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);  // Returns a number value
}
  
let value = toCelsius; // Accessing a function without () returns the function object and not the function result.
const v1 = value(100);

console.log("100 fahrenheit in celsius =>", v1);
console.log(typeof toCelsius, toCelsius instanceof Function); // All f/n in JS are instances of the Function constructor

// Arrow f/n
const arrowFunc = () => { console.log("Arrow f/n called")};
arrowFunc();

//IIFE - Can be called only once
const mutliply = ((x,y) => { return x*y})(4,5);

console.log(mutliply);

// IIFE with Async/Await
// (async function() {
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//                      .then(response => response.json());
//     console.log(data);
// })();


// Rest parameter (...)  [applicable for both- arrow and normal f/n]

const func1 = (...args)=>{
 
    let sum = 0;
    for(let i = 0; i<args.length; i++){
        sum += args[i];
    }
    return sum;
}

const sumOfNmbrs = func1(4, 9, 16, 25, 29, 100, 66, 77);
console.log("...Rest operator: Sum =>", sumOfNmbrs);


// Apply() method with arguments

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.apply(person1, ["Oslo", "Norway"]);

  Math.max(1,2,3) // Returns 3, since array dont have max method we will use "apply()"

  console.log("max apply",Math.max.apply(0,[1,2,3])) // you can pass null,Math,empty string in place of 0.
  console.log("max apply",Math.max.apply([1,2,3]))

  // In JS strict mode, if the 1st argument of the apply() method is not an obj, it becomes the owner (obj) of the invoked f/n. In "non-strict" mode, it becomes the global obj.
