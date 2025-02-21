# CONTENT => Array

Arrays are a special type of objects. The typeof operator in JS returns "object" for array. They are non primitive and mutable.

But Differnce is => array uses number to access its elements unlike objects(uses key to access).

**NOTE :** Because JS array are special kind of object we can have variables of different types in same array, we can have obj in array, f/n in array, array in array.

### Creating an array
- Array literal => const arr = [item1, item2, ...];                  // This is preferred
- new keyword => const arr = new Array(item1, item2, ...);      // can produce unexpected results sometimes; e.g. if u put only 1 number element it will take as size.

- Access array elements by index (0 index). We can change the elements of array.

**NOTE :** How to recognize array? Array.isArray(array_name); OR (array_name instanceof Array) [beacause typeof will give object for object and array both]

**NOTE :** JS does not support associative arrays (aarray with named indexes).

### Array methods

- arr.length;  arr.toString(); arr.at(index);

**NOTE :** arr.at(2) OR arr[2] will produce same result, but JS doesNot allow -ve bracket indexing like [-2] thats why arr.at() method is usefull.

- arr.join(); arr.pop(); arr.push(); arr.shift(); arr.unshift();

- arr1.concat(arr2,arr3,...); - does not change existing array, creates a new array.

- arr.flat(); convert multidiamensional array into a one-diamensional array.

#### splice and slice methods 

1. splice() => used to add new items to array. OR *simply removes elements without leaving holes.* Returns the deleted items. 

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");  // Alters the orignal array.
```
1st parameter defines position where new elements should be added(spliced in), 2nd defines how many elements should be removed, rest parameters defines new elements to be added. 

**NOTE :** The splice() method returns an array with the deleted items. Also splice() removes elements without leaving holes in array.

**NOTE :** toSpliced() methods is same but it does not alters the orignal array.

2. slice() => Slice out piece of array into new array. It does not remove element from orignal array.
``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sliceArr = fruits.slice(1);   // slice out part of an array starting from array element 1.
const sliceArr2 = fruits.slice(1,3);
```

#### Search methods

- arr.indexOf(item) - retuens index or -1 if not found;
- arr.includes(item) - returns true or false;

#### Sort methods


















