# JavaScript
E2E JS

1. Clone a repo from github in local.
2. Open in VsCode
3. create a file with .js extension
4. to run a simple JS program run - `node filename ` => e.g- "node 01start.js"


Computer is an electronic device which takes input from user, process it under the control of  
programs and gives output to the users and saves in the storage.

Program- It is a set of instruction(s). We can write pgms in any lang.

Low level lang(1st & 2nd GEN)
High level lang [3rd(c++, Java, JS ), 4th(Python), 5th(Ruby) ] 

Compiled vs Interpreted languages
Compiled- 1=>First need to compile(generates compiled file=> temp in c++, .class in java) then RUN.
          2=> Don't run at all if there is error.
          3=> E.g. = c, c++, Java, Rust, Go
Interpreted- 1=> Usually go line by line.
            2=> Partially run till error encounters.
            3 => E.g. = JS, Python

-----------------------------------------------------------------------------------------------------


# JavaScript (ES6- Second revision of JS(2015))
JS is Interpreted, dynamically typed and single threaded lang.(We can make node multithreaded)


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

</body>console.log(x);
</html>       [Placing scripts at the bottom of the <body> element improves the display speed]
```

### 2. External JavaScript

1. It separates HTML and code thus easier to read and maintain.
2. Cached JavaScript files can speed up page loads

External References 

1. With a full URL (e.g. <script src="https://www.w3schools.com/js/myScript.js"></script> )
2. With a file path (e.g. <script src="/jsLogic/myScript.js"></script>)
3. Without any path











Basics of RAM, ROM.
VARIABLES (Declaration & initialization) (Global scope & block/function scope)

Let => Block Scope, cannot be Redeclared in the same scope, can be reassign
Const => Block Scope, cannot be Redeclared in the same scope, can'nt be reassign
Const => It does not define a constant value. It defines a constant reference to a value.
Means we can'nt Reassign a constant array but can change elements of array(same for objects)



1 => Primitives (numbers, )



// console.log("hi")
// console.log(2**3)