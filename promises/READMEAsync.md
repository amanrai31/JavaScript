# CONTENT => Async/await

Async f/n always returns a promise.

```js
async function example() {    // async f/n always return a promise even if you retuen plain value
    return "Hello";           // Equivalent to => a function returning Promise.resolve("Hello");
}
```

**Important note :** Await pauses the execution of **ONLY** it's `surrounding async f/n` until the promise is settled. It does not block the event loop. 

**NOTE :** `Await only works with Promises only` (or values that behave like Promises) and is defined inside async f/n only.

```js
function fun1(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = value * value;
            console.log(result);
            resolve(result);
        }, 2000);
    });
}
function fun2(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = value * value;
            console.log(result);
            resolve(result);
        }, 3000);
    });
}
function fun3(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = value * value;
            console.log(result);
            resolve(result);
        }, 4000);
    });
}
async function func() {
    console.log("Async/await starts => fetching data 1...");
    const first = await fun1(3);
    console.log("fetching data 2...");
    const second = await fun2(first);
    console.log("fetching data 3...");
    const third = await fun3(second);
    console.log("Async/await ends");
}

func();
```

#### Await works with Promise only

```js
async function demo() {
    const val = await 42;                    //  treated as await Promise.resolve(42)
    console.log(val);
}
demo();
console.log("hi");
```

### Error Handling

```js
async function test() {
    try {
        const res = await Promise.reject("Oops");
        console.log("res",res);                                 // will not logged, as Promise is rejected and will be catched.
    } catch (err) {
        console.error("Caught Error:", err);
    }
}
test();
```

### 
```js
// Sequential (slow)
async function seq() {
    const res1 = await task1();
    const res2 = await task2();
    console.log(res1, res2);
}

// Parallel (faster)
async function parallel() {
    const promise1 = task1();      // calls promise
    const promise2 = task2();       // calls promise
    const res1 = await promise1;     // OR we can do Promise.all([task1(),task2()])
    const res2 = await promise2;
    console.log(res1, res2);
}
```

```js
async function processData() {
    console.log("Fetching...");
    
    const data = await fetchData();
    
    console.log("Processing:", data);

    try {
        const result = await riskyTask();
        console.log(result);
    } catch (err) {
        console.error("Error:", err);
    }
}

function fetchData() {
    return new Promise(res => setTimeout(() => res("Data Ready"), 1000));
}

function riskyTask() {
    return new Promise((_, rej) => setTimeout(() => rej("Failure"), 2000));
}

processData();
```

Async IIFE : `(async()=>{...})()`

-----

# FETCH APIs 

Fetch API is a modern, "promise-based" way to make HTTP requests in JS (handling n/w requests asynchronously), replacement for Older XMLHttpRequest (XHR)

**Syntax :** `let promise = fetch(url, [options]);`

HTTP verbs/methods : GET, POST, PUT, DELETE, PATCH etc.

```js
fetch('https://api.example.com/data')
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();                                    // This is a Response object, JSON.parse(res) works for plain string
  })
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
```

```js
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json',
             'Authorization': 'Bearer your_token_here',
             'Custom-Header': 'value' },
  body: JSON.stringify({ name: 'Aman', age: 25 })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

```js
// fetch api in Async/await style

async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Fetch Error:', err);
  }
}

fetchData();
```

### HTTP response status codes

1. Informational response (100-199)
2. Successful responses (200-299)
3. Redirection messages (300-399)
4. Client error responses (400-499)
5. Server error response (500-599)

HTTP response header contains details such as => content type, HTTP status code etc.
