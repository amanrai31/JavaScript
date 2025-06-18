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

Source - [https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP]

---

Computer is an electronic device which takes input from user, process it under the control of  
programs and gives output to the users and saves in the storage.

Program- It is a set of instruction(s). We can write pgms in any lang.

1. Low level lang(1st & 2nd GEN)
2. High level lang [3rd(c++, Java, JS ), 4th(Python), 5th(Ruby, Perl), Rust, c#, swift, Go ] 

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
JavaScript is an OOPs language that uses prototypes OR class(modern JS) for inheritance.

### * What JS can do (WHY JS)
1. JS is only language that a browser understands. (We have other languages that transpiled to JS e.g. TS, Dart, WebAssembly)
2. JS can Change/Show/Hide HTML content.
3. JS can change HTML styles (CSS).

### * JavaScript with HTML

#### 1. JS in head or body

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

#### 2. External JavaScript Advantages

1. It separates HTML and code thus easier to read and maintain.
2. Cached JavaScript files can speed up page loads.

External JS References 

1. With a full URL ``` <script src="https://www.w3schools.com/js/myScript.js" > </script> ```
2. With a file path ``` <script src="/jsLogic/myScript.js defer"></script>)  // Here defer attribute ensures that script is executed after HTML is fully parsed (avoids loading HTML). Add script tag in head of HTML ```
3. Without any path

- Similarly we can attach CSS to HTML in head of html like => ``` <link rel="stylesheet" href="style.css"> ```
### * How JS displays data

1. Using innerHTML. [Common way- document.getElementById(id)]
2. Writing into the browser console, using console.log(). [Used for debugging]
3. Writing into an alert box, using window.alert(). OR just alert().
4. Js print [window.print()]
5. Using document.write().[delete all existing HTML, used for testing]

**NOTE :** How to take input data => prompt()

**NOTE :** We can not run js on browser directly, HTML connects our code(JS) to browser.

**NOTE :** If you write script tag in head, you woun't be able to access document elements ```js console.dir(document.body); // will give nothing ``` => That's why we put script at the end.

----------------------------------------------------------------------------

