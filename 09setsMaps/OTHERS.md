# CONTENT => Bitwise, RegExp, Error, scope, Strict, this, JSON, debugging

## Bitwise

&	AND                     =>Sets each bit to 1 if both bits are 1

|	OR                      =>Sets each bit to 1 if one of two bits is 1

^	XOR	                    =>Sets each bit to 1 if only one of two bits is 1 (we can say=> sets each bit to 1 if both bits are opposite i.e. 1 & 0 OR 0 & 1)

~	NOT	                    =>Inverts all the bits

**<<**	Zero fill left shift	=> Shifts left by pushing zeros in from the right and let the leftmost bits fall off

**>>**	Signed right shift	    => Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

**>>>**	Zero fill right shift	=> Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

**NOTE :** JS stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers. Before a bitwise operation is performed, JS converts numbers to 32 bits signed integers. After the bitwise operation is performed, the result is converted back to 64 bits JS numbers.

E.G. if you do ~(nor) of 5 using 4 bit binary it will be 10 (0101 => 1010 i.e NOR of 5 is 10 if operated on 4bit). But This NOR operation will be operated on 32bit.

Which is Inverse of 00000000000000000000000000000101 (5) that is 11111111111111111111111111111010 (~5 = -6)

A signed integer uses the leftmost bit as the minus sign.




- XOR (^)

5^1 // (5 XOR 1)

5 = 00000000000000000000000000000101
1 = 00000000000000000000000000000001

RESULT = 00000000000000000000000000000100 = 4

- NOT (~)

5 = 00000000000000000000000000000101
~ 5 = 11111111111111111111111111111010 = -6 

- Left shift (<<) (This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:)

5	00000000000000000000000000000101
5 << 1	00000000000000000000000000001010 (10)

- Right Shift (>>) (This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off)

-5	11111111111111111111111111111011
-5 >> 1	11111111111111111111111111111101 (-3)

- Right Shift (>>>) (This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off)


5	00000000000000000000000000000101
5 >>> 1	00000000000000000000000000000010 (2)

## JS Regular Expressions(RegExp)

A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for **text search** and **text replace** operations.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

In JS, regular expressions are often used with the two string methods: search() and replace().

**SYNTAX =>** ```/pattern/modifier(s);```

```js
let text = "Visit W3Schools";
let n = text.search(/w3schools/i); //a case-insensitive search for "w3schools" in a string:  SYNTAX => /pattern/modifier(s): Output = 6
```
```js
let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");  // Visit W3Schools!
```

#### RegEx Modifiers 

- i => Perform case-insensitive matching
- g => Perform a global match (find all)
- m => Perform multiline matching

#### RegEx Patterns

1. **Brackets**

- [abc] => 	Find any of the characters between the brackets

```js
let text = "Is this all there is?";
let result = text.match(/[h]/g);          // result will be => h,h
```

- [0-9] => Find any of the digits between the brackets

```js
let text = "123456789";
let result = text.match(/[1-4]/g);       // result will be => 1,2,3,4
```

- (x|y)	Find any of the alternatives separated with |

```js
let text = "re, green, red, green, gren, gr, blue, yellow";
let result = text.match(/(red|green)/g);           // result will be => green,red,green
```

2. **Metacharacters** 

- \d => find a digit
```js
let text = "Give 100%!"; 
let result = text.match(/\d/g);   //result will be => 1,0,0
```

- \s => find a white space
```js
let text = "Is this all there is?";
let result = text.match(/\s/g);         //result will be =>  , , ,
```

- \uxxxx =>	Find the Unicode character specified by the hexadecimal number xxxx

```js
let text = "Visit W3Schools. Hello World!"; 
let result = text.match(/\u0057/g);            // Does a global search for W, so result => W,W
```

3. **Quantifier** (Read about, not that important)

#### RegEx Objects

- Some methods of RegEx Obj => test(), exec();

```js
//Question => How many matches will the regular expression get?
let txt = 'Ladies and gentlemen';
let x = txt.match(/[abc]/ig);                    // Answer is 2
```