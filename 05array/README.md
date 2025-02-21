# CONTENT => Array

Arrays are a special type of objects. The typeof operator in JS returns "object" for array. They are non primitive and mutable.

But Differnce is => array uses number to access its elements unlike objects(uses key to access).

**NOTE :** Because JS array are special kind of object we can have variables of different types in same array, we can have obj in array, f/n in array, array in array.

### Creating an array
- Array literal => const arr = [item1, item2, ...];                  // This is preferred
- new keyword => const arr = new Array(item1, item2, ...);      // can produce unexpected results sometimes; e.g. if u put only 1 number element it will take as size.

- Access array elements by index (0 index). We can change the elements of array.

### Looping array element

**NOTE :** How to recognize array? Array.isArray(array_name); OR (array_name instanceof Array) [beacause typeof will give object for object and array both]
