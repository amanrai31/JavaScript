## Content => VARIABLES, OPERATORS, DATA TYPES

### Basics of RAM, ROM.

### Other topics
1. JS Code Blocks {}
2. JS Statements(Instructions)
3. Keywords, Comments, [JS identifiers are case sensitive.]

### VARIABLES 
 - Variables are container for storing data. 
 
**Note -** JS variable can hold any type of data. (Variable name can start with $,_ or with alphabets only).

1. VARIABLE Declaration & initialization
2. Global scope & block scope

**Note -** Before ES6, JS had only Global scope and function scope, there was nothing like block scope.

1. let => Block Scope, cannot be Redeclared in the same scope, can be reassign
2. const => Block Scope, cannot be Redeclared in the same scope, **can'nt be reassign**, must be assign a value when decleared. It does not define a constant value. It defines a constant reference to a value. Means we can'nt Reassign a constant array but can change elements of array(same for objects)
3. var => Global scope, can be Redeclared.

**Note -** let and const does not bind ```this```.

``` js
const cars = ["Saab", "Volvo", "BMW"];  // We can not reassign this const array but can change the elements of array. 

cars = ["Toyota", "Volvo", "Audi"];    // ERROR 
```

- Expressions(Algebra)

#### Operators
1. Arithmetic Operators [ + , - , * , / , % , **(exponential), ++ -- ]
2. Assignment operator [ = ]   (See logical assignment operator.)
3. Comparison Operators [ ==, !==, < , <= , > , >= , ===(equal value and equal type) , !==(not equal value or equal type)]
4. Loical operators [ && , || , ! ]
5. Type oprators[typeof(Returns the type of a variable), instanceof(Returns true if an object is an instance of an object type)]
6. Bitwise Operators [ &, | , ~(not- uniary operator) , ^(xor) , << , >> , >>>]
7. Ternary operator ( ? ), Nullish coalescing (??=) If the first value is undefined or null,the second value is assigned.

**Note -** Bit operators work on 32 bits numbers. 

-----

### Data Types (8)

1. Number (64 bits, 15-17 digit precision)
2. bigint [let bigInt = 20n; Used on integers only, arbitrary precision(unless ur memory fulls)]
3. boolean
4. string
5. object
6. undefined [ let car;    // Value is undefined, type is undefined, (Variable declared without value is undefined)]
7. null
7. symbol

**Note :** Non-primitive data type => It is passed by reference and thus mutable, stored by reference. ( e.g. Object)

**Note :** Primitive data type => Stored directly in memory, immutable(Changing their value create a new memory allocation). (e.g. All other data type except Object)


```JS
let x = 16 + 4 + "Volvo";  // 20volvo
let x = "Volvo" + 16 + 4;  // Volvo164 (Once it encounters string, will treat next as string.)

```
