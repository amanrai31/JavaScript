## Content => DATA TYPES
### Data Types (8)

1. Number (64 bits, 15-17 digit precision)
2. bigint [let bigInt = 20n; Used on integers only, arbitary pricision(unless ur memory fulls)]
3. boolean
4. string
5. object
6. undefined [ let car;    // Value is undefined, type is undefined, (Variable declared without value is undefined)]
7. null
7. symbol

**Note :** Non-premitive data type => It is passed by reference and thus mutable, stored by reference. ( e.g. Object)

**Note :** Premitive data type => Stored directly in memory, immutable(Changing their value create a new memory allocation). (e.g. All other data type except Object)


```JS
let x = 16 + 4 + "Volvo";  // 20volvo
let x = "Volvo" + 16 + 4;  // Volvo164 (Once it encounters string, will treat next as string.)

```
