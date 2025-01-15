# JavaScript
E2E JS

**Content => JS INTRO, VARIABLES, OPERATORS**

### Prerequisites
1. Node (v20 or above)
2. VsCode

### Steps
1. Clone a repo from github in local.
2. Open in VsCode
3. create a file with .js extension
4. to run a simple JS program run - `node filename ` => e.g- "node intro.js"

---

Computer is an electronic device which takes input from user, process it under the control of  
programs and gives output to the users and saves in the storage.

Program- It is a set of instruction(s). We can write pgms in any lang.

1. Low level lang(1st & 2nd GEN)
2. High level lang [3rd(c++, Java, JS ), 4th(Python), 5th(Ruby), Rust, c#, swift, Go ] 

Compiled vs Interpreted languages

Compiled- 
1. First need to compile(generates compiled file=> temp in c++, .class in java) then RUN.
2. Don't run at all if there is error.
3. E.g. = c, c++, Java, Rust, Go

Interpreted-
1. Usually go line by line.
2. Partially run till error encounters.
3. E.g. = JS, Python

-----------------------------------------------------------------------------------------------------


# JavaScript (ES6- Second revision of JS(2015))
JS is Interpreted, dynamically typed, (FP && OOPS), executed by browser and single threaded lang.(We can make node multithreaded).
JavaScript is an OOPs language that uses prototypes rather than using classes for inheritance.

### What JS can do
1. JS can Change/Show/Hide HTML content.
2. JS can change HTML styles (CSS).

## JavaScript with HTML

### 1. JS in head or body

```
<!DOCTYPE html>    
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>       [Placing scripts at the bottom of the <body> element improves the display speed]

document.getElementById("demo").style.fontSize = "35px"; -- Changing CSS using JS
```

### 2. External JavaScript Advantages

1. It separates HTML and code thus easier to read and maintain.
2. Cached JavaScript files can speed up page loads.

External JS References 

1. With a full URL (e.g. <script src="https://www.w3schools.com/js/myScript.js" > </script> )
2. With a file path (e.g. <script src="/jsLogic/myScript.js defer"></script>)  // Here defer attribute ensures that script is executed after HTML is fully parsed (avoids loading HTML)
3. Without any path

### How JS displays data

1. Using innerHTML. [Common way- document.getElementById(id)]
2. Using document.write().[delete all existing HTML, used for testing]
3. Writing into an alert box, using window.alert(). OR just alert().
4. Writing into the browser console, using console.log(). [Used for debugging]
5. Js print [window.print()]

----------------------------------------------------------------------------

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

**Note -** let and const does not bind this.

```JS
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
7. Ternary operator ( ? )



**Note -** Bit operators work on 32 bits numbers. 

**Note -** Nullish coalescing assignment operator(??=) => If the first value is undefined or null,the second value is assigned.
