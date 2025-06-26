# CONTENT => Async/await

Async f/n always returns a promise.

```js
async function example() {    // async f/n always return a promise even if you retuen plain value
    return "Hello";           // Equivalent to => a function returning Promise.resolve("Hello");
}
```

Await pauses the execution of it's `surrounding async f/n` until the promise is settled. 

**NOTE :** `Await only works with Promises only` (or values that behave like Promises) and defined inside async f/n only.

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
```

### Error Handling

```js
async function test() {
    try {
        const res = await Promise.reject("Oops");
        console.log(res);
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
    const res1 = await promise1;
    const res2 = await promise2;
    console.log(res1, res2);
}
```


Async IIFE : `(async()=>{...})()`

