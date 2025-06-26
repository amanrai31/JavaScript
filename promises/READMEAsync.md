# CONTENT => Async/await

Async f/n always returns a promise.

Await pauses the execution of it's surrounding async f/n until the promise is settled. 

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

Async IIFE : `(async()=>{...})()`

