# CONTENT => String

## String 
String is Sequence of charaters, used for stroing text. We can use single/double quotes/templete(backticks)

Backslash escape charater( \ )- truns special character into string charater. If you want ' OR " OR backslash itself as string charater, use backslash (\) first then use these special charater.


``` js
let text = "We are the so-called \"Vikings\" from the north.";
```

**NOTE :** JS strings are primitive values, created from literals, but string also can be defined as objects using new keyword. But string obj can produce unexpected results, so *use string litterals*.

### JS string methods (JS also counts position from 0)

**NOTE :** JS string are primitive so immutable. All string method produce a new string without altering the orignal one. All methods are case sensitive by default (make it caseInsensitive using Regex)

1. **String length => str.length** 


2. **Extracting String Characters**
- str.charAt(position) || **str.at(position)** => at() method is preferred as it allow to use negtive indexed
- str.charCodeAt(position) => gives the ASCII value of that character

3. **Extracting String Parts (includes start index, excludes end index)**
- **slice(start, end)**            [if you dont give end index, it will slice rest of the string from start] *recommended*
- substring(start, end)            [-ve start/end values will be treated as 0]
- substr(start, length)            

4. **Converting to Upper and Lower Case**
- str.toUpperCase()
- str.toLowerCase()

5. **str.concat("some string")**

6. **str.trim(); str.trimStart(); str.trimEnd();**

7. **Replace string content**
- str.replace("oldSubstring/target", "new string/which will replace")  
**NOTE :** It is caseSensitive and this method replaces only the first match [Use RegEx (/i & /g respectivly) to overcome]

8. **String to array**
- str.split(",") [split on comma]
- str.split(" ")  [split on space]
- str.split("")  [returned array will be an array of single characters]

**NOTE :** If the separator is omitted, the returned array will contain the whole string in index [0].

9. **string search**
- str.indexOf("string/substring") => returns -1 if not present
- str.includes("string/substring") => true,false


### Template strings => ``

Template string allows single & double quotes inside a string, allows multiline string and *interpolation* ${...} i.e. it can interpolate variables and expressions.
