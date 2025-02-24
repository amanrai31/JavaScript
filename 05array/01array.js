// Array

{
    const carArr = ["Mahindra", "BMW", "Tata", "Toyota"];  //Array literals => recommended declaration.
    console.log(carArr);
    console.log(typeof(carArr));
    console.log(carArr[1]);

    console.log(Array.isArray(carArr), (carArr instanceof Array)); // This is how we can check for array.

    // Methods => length, toString, at
    console.log("length of carArr => ",carArr.length,"carArr in string => ",carArr.toString());
    console.log(carArr[-2], carArr.at(-2));  // Accessing elements using [] and using at() method; at() accepts -ve index too.
 
    // push(), pop(), shift()
    carArr.push("Benz", "Dodge");           // adds elements at last
    const poped = carArr.pop();   // returns the removed element
    console.log(poped, carArr)
    
    carArr.shift();               // removes the 1st element and shift all other elements to lower index
    console.log(carArr);

    carArr.unshift("Dodge");
    console.log(carArr);
}


//Nested array
{
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
 // console.log(myObj);
}

// splice(), slice()
{
  const carArr = ["Mahindra", "BMW", "Tata", "Toyota"];
  carArr.splice(2,0,"Dodge", "Audi");                 // Add at 2nd index, removes 0 elements, add following items.
  console.log("splice",carArr);
  const splicedItems = carArr.splice(1,2);              
  console.log("Spliced items => ",splicedItems,"After splice => ",carArr);
  carArr.splice(1,1);                                 // Remove 1 item(2nd parameter) from index 1.
  console.log(carArr);
  carArr.push("Dodge", "Audi");
  const useToSpliced = carArr.toSpliced(1,2);     // removes 2 elements staring from index 1, Also does not alter original array
  console.log(useToSpliced, carArr);

  // slice() method in README
}
