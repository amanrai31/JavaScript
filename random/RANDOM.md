# CONTENT => RANDOM STUFF

Diff in undefined & null

- undefined => JS engine (or unintentional by dev) ||  Value not assigned / doesn’t exist || Uninitialized vars, missing keys => We don't know what's there.
- null      => Developer (intentional) ||  Explicitly empty  ||  API responses, database placeholders => We know there is nothing(null)

**Object and Array =>** Object = key-value || array = index-value

- All intervals/timers get cleared on reload/refresh

- Even though array/set has key,value but they are not stored like key-value pair like in map. So, we can not do ```for(let [key,value] of arr){.....}```. For that convert array/set into entry first.

- take input from user =>
```js
const num = prompt("Enter a number");
num%2 === 0? console.log(num, "is an even number"): console.log(num, "is NOT an even number");
```

- length of array or string is a property, not a method.

- forEach(), map(), filter(), reduce() are functions not purely LOOP as we can not apply forEach on string, we can only apply them on "iterable objects"

- slight diff b/w forEach and map,filter,reduce is that map returns a new array and forEach just performs some operation.

- window object represents an open window in a browser. It's browser's object (not js's) & automatically created by browser.

- ``` console.dir(window.document)``` => prints the props/methods of object.

```js
const arr = [1,2,3];
console.log(arr.__proto__);            // Array constructor
console.log(arr.__proto__.__proto__);  // Object constructor
console.log(arr.__proto__ === Array.prototype); //true
console.log(Array.prototype.__proto__ === Object.prototype); //true, as object is ultimate ancestor

// We have prototype(Which itself is an object) for every built in obj constructor like Array, Set, Map etc, we can make prototype of user defined object constrctor. 
// But what is common in all obj constructor(built in OR userDefined) is their prototype also contains a object prototype (Which is part of Object=> main hero/ultimate ancestor )
//Their prototype chain ultimately points to Object.prototype, unless deliberately broken (like Object.create(null) => low level object).
```
-----

MAP Polyfill
- Built-in constructors `new Object()`, `new Array()`, `new Set()`, `new Map()`,`new RegExp()`, `new Date()`, `new Function()`

**Want to define polyfills or custom methods?** => modify these built in constructors.
```
Array.prototype.myMap = function(callbackFn) {
  var arr = [];              
  for (var i = 0; i < this.length; i++) { 
     /* call the callback function for every value of this array and       push the returned value into our resulting array
     */
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
}
```
-----

