# CONTENT => Array

Arrays are a special type of objects. The typeof operator in JS returns "object" for array. They are non primitive and mutable.

But Difference is => array uses number to access its elements unlike objects(uses key to access).

**NOTE :** Because JS array are special kind of object we can have variables of different types in same array, we can have obj in array, f/n in array, array in array.

### Creating an array
- Array literal => ```js const arr = [item1, item2, ...]; ```          // This is preferred
- new keyword => ```js const arr = new Array(item1, item2, ...); ```  // can produce unexpected results sometimes; e.g. if you put only 1 number element it will take as size.

- Access array elements by index (0 index). Also we can change the elements of array.

**NOTE :** How to recognize array? Array.isArray(array_name); OR (array_name instanceof Array) [because typeof will give object for object and array both]

**NOTE :** JS does not support associative arrays (array with named indexes).

### Array methods

- arr.length;  arr.toString(); arr.at(index);

**NOTE :** arr.at(2) OR arr[2] will produce same result, but JS doesNot allow -ve bracket indexing like [-2] thats why arr.at() method is useful.

- arr.join(); arr.pop() => pops last; arr.push() => push at last; arr.shift() => put at 0th; arr.unshift() => removes from 0th;

- arr1.concat(arr2,arr3,...); - does not change existing array, creates a new array.

- arr.flat(); convert multidimensional array into a one-dimensional array.

#### splice and slice methods 

1. splice() => used to add new items to array. OR *simply removes elements without leaving holes.* Returns the deleted items. 

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");  // Alters the original array.
```
1st parameter defines position where new elements should be added(spliced in), 2nd defines how many elements should be removed, rest parameters defines new elements to be added. 

**NOTE :** The splice() method returns an array with the deleted items. Also splice() removes elements without leaving holes in array.

**NOTE :** toSpliced() methods is same but it does not alters the original array.

2. slice() => Slice out piece of array into new array. It does not remove element from original array.
``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sliceArr = fruits.slice(1);   // slice out part of an array starting from array element 1.
const sliceArr2 = fruits.slice(1,3);
```

#### Search methods

- arr.indexOf(item) - returns index or -1 if not found;
- arr.includes(item) - returns true or false;

#### Sort methods

- arr.sort(); arr.reverse(); => By combining sort() and reverse(), you can sort an array in descending order.
- arr.toSorted(); arr.toReversed() => safe to use as they do not alter original array;

**NOTE :** Sorting happens as string so if we sort =>```js const arr = [10, 25, 8, 100]; then 100 will come before 25 ```

**Sorting of numbers**
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // using compare f/n (will output in asc order)
```

- The compare f/n => ```js function(a, b){return a - b} ```

If compare f/n returns -ve "a" is sorted before "b"; If returns +ve, "b" is sorted before "a"; If 0, no changes done with sort order. 

**NOTE :** ```js points.sort(function(a, b){return a - b}); // using compare f/n (will output in desc order)```

### Array iteration

1. forEach();         =>  calls a callback f/n once for each array element.
2. map(); flatMap()   =>  creates a new array by performing a function on each array element.
3. filter()           =>  creates a new array with array elements that pass a test.
4. reduce()           =>  runs a function on each array element to produce (reduce it to) a single value.
5. keys()             =>  returns an Array Iterator object with the keys of an array.
6. entries()          =>  returns an Array Iterator object with key/value pairs.
7. spread             =>  (...)


```js
// Suppose i do not know any functon about array then =>
const arr = [1,2,3];
console.log(arr.__proto__);
```
