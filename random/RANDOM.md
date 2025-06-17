# CONTENT => RANDOM STUFF

Diff in undefined & null

- undefined => JS engine (or unintentional by dev) ||  Value not assigned / doesn’t exist || Uninitialized vars, missing keys.
- null      => Developer (intentional) ||  Explicitly empty  ||  API responses, database placeholders

**Object and Array =>** Object = key-value || array = index-value

- All intervals/timers get cleared on reload/refresh

- Even though array/set has key,value but they are not stored like key-value pair like in map. So, we can not do ```for(let [key,value] of arr){.....}```. For that convert array/set into entry first.

- take input from user =>
```js
const num = prompt("Enter a number");
num%2 === 0? console.log(num, "is an even number"): console.log(num, "is NOT an even number");
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

