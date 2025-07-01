# CONTENT => RANDOM STUFF

Diff in undefined & null

- undefined => JS engine (or unintentional by dev) ||  Value not assigned / doesn’t exist || Uninitialized vars, missing keys => We don't know what's there.
- null      => Developer (intentional) ||  Explicitly empty  ||  API responses, database placeholders => We know there is nothing(null)

- All intervals/timers get cleared on reload/refresh

- Even though array/set has index-value OR value-value but they are not stored like key-value pair like in map. So, we can not do ```for(let [key,value] of arr){.....}```. For that convert array/set into entry first.

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

-----

- Object methods => Object.assign({},obj), Object.create(obj), object.bind(), object.apply()

- Callback means passing whole f/n OR we can say passing f/n ref OR f/n definetion. Do not call that that function there just pass the whole f/n. ` callback is passing a function (not calling a f/n) as argument of some other f/n`

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


Bhai Prototype/prototypeChain AND Promise/PromiseChain => These are heavy concept for now.

Generator f/n => next,return,throw   

Factory function => create object without using new keyword

```js
function Factory(name,age){
  return {name:name, age:age};   // OR return {name,age};
}
const obj1 = Factory("aman",24);
console.log(obj1);
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

