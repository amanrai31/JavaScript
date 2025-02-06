# CONTENT => String

## String 
String is Sequence of charaters, used for stroing text. We can use single/double quotes/templete(backticks)

Backslash escape charater( \ )- truns special character into string charater.
- \' means single qoute
- \"  means double qoute
- \\ means backslash

```
let text = "We are the so-called \"Vikings\" from the north.";
```

**NOTE :** JS strings are primitive values, created from literals, but string also can be defined as objects using new keyword. But string obj can produce unexpected results, so *use string litterals*.

### JS string methods (JS also counts position from 0)

**NOTE :** JS string are primitive so immutable. All string method produce a new string without altering the orignal one. 

1. String length => str.length 


2. Extracting String Characters
- str.charAt(position) || **str.at(position)** => at() method is preferred as it allow to use negtive indexed
- str.charCodeAt(position) => gives the ASCII value of that character

3. Extracting String Parts (includes start index, excludes end index)
- **slice(start, end)**            [if you dont give end index, it will slice rest of the string from start] *recommended*
- substring(start, end)            [-ve start/end values will be treated as 0]
- substr(start, length)            

4. Converting to Upper and Lower Case
- str.toUpperCase()
- str.toLowerCase()

5. str.concat(list of parameters to be added)

6. 