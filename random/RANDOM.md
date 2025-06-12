# CONTENT => RANDOM STUFF

Diff in undefined & null

- undefined => JS engine (or unintentional by dev) ||  Value not assigned / doesn’t exist || Uninitialized vars, missing keys.
- null      => Developer (intentional) ||  Explicitly empty  ||  API responses, database placeholders

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

