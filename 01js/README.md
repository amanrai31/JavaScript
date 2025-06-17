## Content => VARIABLES, OPERATORS, DATA TYPES

### Basics of RAM, ROM.

### VARIABLES 
 - Variables are container for storing data. 
 
**Note -** JS variable can hold any type of data. (Variable name can start with $,_ or with alphabets only).

1. VARIABLE Declaration & initialization. Hoisting(Chapter 10), pass by **value** & pass by **reference**
2. Global scope & block scope (chapter 10)
3. JS Statements(Instructions)
4. Keywords, Comments, [JS identifiers are case sensitive.]
5. Expressions(Algebra)

### Operators
1. Arithmetic Operators [ + , - , * , / , % , **(exponential), ++ -- ]
2. Assignment operator [ =, +=, -=, *=, /=, %=, **= ]   (See logical assignment operator.)
3. Comparison Operators [ ==, !==, < , <= , > , >= , ===(equal value and equal type) , !==(not equal value or equal type)]
4. Logical operators [ && , || , ! ]
5. Type operators[typeof(Returns the type of a variable), instanceof(Returns true if an object is an instance of an object type)]
6. Bitwise Operators [ &, | , ~(not- urinary operator) , ^(xor) , << , >> , >>>]
7. Ternary operator ( ? ), Nullish coalescing (??=) If the first value is undefined or null,the second value is assigned.

**Note -** Bit operators work on 32 bits numbers. 

-----

### Data Types (8) => 7 primitive & 8th one is Object

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
