# CONTENT => Sets, Maps

## Sets

A JS Set is a collection of unique values. The values can be of any type, primitive values or objects.

**How to create a set**

- Passing an array to new Set() constructor
- Create an empty set and use add() to add values

```
const letters = new Set(["a","b","c"]);
```

```
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters.sie);
```