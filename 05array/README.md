# CONTENT => Array

Arrays are a special type of objects. The typeof operator in JS returns "object" for array. They are non primitive and mutable.

But array uses number to access its elements unlike objects(uses key to access).

**NOTE :** Because JS array are special kind of object we can have variables of different types in same array, we can have obj in array, f/n in array, array in array.

### Creating an array
- Array literal => const arr = [item1, item2, ...];                  // This is preferred
- using new keyword => const arr = new Array(item1, item2, ...);

- Access array elements by index (0 index). We can change the elements of array.
