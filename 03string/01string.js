// All string methods return a new string. They don't modify the original string. Strings are immutable
// All methods are case sensitive by default (make it caseInsensitive using Regex)
let x = "John";
let y = new String("John");
console.log(x==y, "    ", x===y);


let a = new String("John");   // string as object
let b = new String("John");
console.log(a==b, "    ", a===b); // Comparing two JavaScript objects always returns false.


// String methods

let str1 = "Jai Shree Ram"

// 1. String length => str.length
console.log(str1.length);  

// str.charAt(position), str1.at(position), str.charCodeAt(position)
console.log("charAt =>",str1.charAt(0),"at =>", str1.at(0));              
console.log("at with -ve index =>", str1.at(-5),"charCodeAt =>", str1.charCodeAt(0));    


// str.slice(start, end) || str.substring(start, end) || str.substr(start, length)
let str2 = "Apple, Banana, Kiwi";
console.log("7 to 12 =", str2.slice(7,13), ": without end index =",str2.slice(7), ": negative index", str2.slice(-12,-6))


// str.toUpperCase(), str.toLowerCase()
console.log(str1.toUpperCase(), " : ",str1.toLowerCase())

// str.concat(list of parameters to be added/concate)
let text1 = "Hello";
let text2 = "Aman";
let text3 = text1.concat(" ", text2, " ", "Rai");
console.log(text3)

// str.trim(), str.trimStart(), str.trimEnd()
let str3 = "     Aman    ";
console.log("Orignal", str3, " full trim",str3.trim(), "trim start",str3.trimStart(), "trim end", str3.trimEnd())

// str.replace(), str.replaceAll()
let str4 = "Please visit Microsoft and Microsoft!";
console.log(str4.replace("Microsoft", "Google")); //Replace only 1st occurrence
console.log(str4.replace("MICROSOFT", "Amazon")); // will not work as replace() is case sensitive

console.log(str4.replace(/Microsoft/g, "Google"));  // this Regex will work for all occurrence(global search)
console.log(str4.replace(/MICROSOFT/i, "Amazon"));   // this Regex will make it caseInsensitive
// console.log(str4.replace(/MICROSOFT/gi, "Amazon")); - this regex will make global search and case insensitive

// str.split()
let str5 = "Aman, Appu, rai"
console.log(str5.split(","));
console.log(str5.split(" "));
console.log(str5.split(""));

// str.indexOf(), str.includes()
console.log(str4.indexOf("Microsoft"));  // returns the 1st occurrence
console.log(str4.includes("Microsoft"));  // returns boolean

