 // Array

{
  const carArr = ["Mahindra", "BMW", "Tata", "Toyota"];  //Array literals => recommended declaration.
  console.log(carArr);
  console.log(typeof (carArr));
  console.log(carArr[1]);

  console.log(Array.isArray(carArr), (carArr instanceof Array)); // This is how we can check for array.

  // Methods => length, toString, at
  console.log("length of carArr => ", carArr.length, "carArr in string => ", carArr.toString());
  console.log(carArr[-2], carArr.at(-2));  // Accessing elements using [] and using at() method; at() accepts -ve index too.

  // push(), pop(), shift(), unshift()
  carArr.push("Benz", "Dodge");           // adds elements at last
  const poped = carArr.pop();   // returns the removed element
  console.log(poped, carArr)

  carArr.shift();               // removes the 1st element and shift all other elements to lower index
  console.log(carArr);

  carArr.unshift("Dodge");       // adds at index 0
  console.log(carArr);
}


//Nested array
{
  const myObj = {
    name: "John",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Benz", models: ["AMG", "GWAGON"] }
    ]
  }
  // console.log(myObj);
}

// splice(), slice()
{
  const carArr = ["Mahindra", "BMW", "Tata", "Toyota"];
  carArr.splice(2, 0, "Dodge", "Audi");                 // Add at 2nd index, removes 0 elements, add following items i.e "Doge" & "Audi"
  console.log("splice", carArr);
  const splicedItems = carArr.splice(1, 2);
  console.log("Spliced items => ", splicedItems, "After splice => ", carArr);
  carArr.splice(1, 1);                                 // Remove 1 item(2nd parameter) from index 1.
  console.log(carArr);
  carArr.push("Dodge", "Audi");
  const useToSpliced = carArr.toSpliced(1, 2);     // removes 2 elements staring from index 1, returns new array & do not alter original array
  console.log(useToSpliced, carArr);
}

// indexOf(), includes()
{
  const carArr = ["Mahindra", "BMW", "Tata", "Toyota"];
  console.log("indexOf() method => ", carArr.indexOf("BMW"), carArr.indexOf("Audi"));
  console.log("includes method => ", carArr.includes("BMW"), carArr.includes("Audi"));

}

// sort methods => sort(), reverse(), compare inside sort(). [toSorted(), toReversed()]
{
  const carArr = ["Mahindra", "BMW", "Tata", "Toyota"];
  const numArr = [2, 7, 23, 54, 5, 76, 33, 8];
  console.log(carArr.sort());                // will work good because it is array of string
  console.log(numArr.sort());                // will give unexpected results

  numArr.sort((a, b) => { return a - b });
  console.log(numArr);
  console.log(numArr.sort((a, b) => { return b - a }));   // sort in DESC ORDER  

  // To sort numeric array, sort methods has a callback i.e. compare f/n. The sort methods iterates for each element the
  // o/u of compare f/n is -ve "a" is sorted before "b"; If returns +ve, "b" is sorted before "a"; 
  // If 0, no changes done with sort order. 
}

// Array iteration
{
  // forEach => calls a callback f/n once for each array element.
  const numbers = [3,4,5,6,7];
  let txt = "";
  numbers.forEach(myFunction);                 //instead of passing f/n here we can direct pass callback.

  function myFunction(value, index, array) {   // We have value, index, & array => we can skip useless params. Does not return new array.
    txt += value;                              // Return statement just exits that particular iteration’s callback & not the forEach.
  }
  console.log(txt);

  // map => creates a new array by performing a function on each array element.
  const numberSquare = numbers.map((value,index,array)=>{
    return value*value;
  })
  console.log(numberSquare);

  // filter => creates a new array with array elements that pass a test (returns true for certain condition)
  const filteredArr = numbers.filter((value,index,array)=> {
    return value >= 5;
  })
  console.log(filteredArr);

  // reduce => reduces an array to a single value by running a f/n on each element, carrying forward a result (called accumulator)

  const x =numbers.reduce((acc,val,index,array)=>{
    console.log(val);
    return acc += val;
    
  },0)
  console.log(x);

  const fruits = ["apple", "banana", "apple", "orange", "banana"];              // IMPORTANT => RUN THIS
  const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  console.log(count);
  


  // spread => Best for adding 2 or more array & adding some other element in the same array at end
  const q1 = ["Jan", "Feb", "Mar"];
  const q2 = ["Apr", "May", "Jun"];
  const q1q2 = [...q1, ...q2];
  console.log(q1q2);
}

// for-of => See chapter 8 (08conditionsLoops)
