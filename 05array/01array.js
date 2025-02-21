// Array

{
    const carArr = ["Mahindra", "BMW", "Tata", "Toyota"];
    console.log(carArr[1]);
    //Adding element at last
    carArr.push("Benz");
    console.log(Array.isArray(carArr), (carArr instanceof Array));
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
}
