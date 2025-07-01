// Shallow copy vs Deep copy
// shallow copy creates a new obj/array, but nested objects/array are still shared b/w the original and the copy

const obj1 = {
    name: "omkar",
    add: {
        city: "pune",
        vill: "xx",
    }
}

const copy = {...obj1};  // use: structuredClone(obj1) OR Lodash library => _.cloneDeep(obj1) OR JSON.parse(JSON.stringify(obj1)) for deep copy
console.log(copy);
copy.name = "aman";
copy.add.city = "bxr"
copy.add.vill = "kk"
console.log(copy);
console.log(obj1);

//`Object destructuring => {...obj}`
// If JSON.parse(JSON.stringify(obj1)) => this method ignores functions, undefined, Symbol, etc. It's only good for plain JSON-safe data.
