## Promise execution & async/await

Source => [https://www.youtube.com/watch?v=Xs1EMmBLpn4]



Promise Object => 
1. PromiseState(*pending* by default) (pending or FullFilled/Resolved OR Rejected)
2. PromiseResult (*undefined* by default) 
3. PromiseReactionRecord (then handler creates this) => PromiseFulfillReactions (e.g result => console.log(result)) OR PromiseRejectReactions (e.g err => console.log(err));
4. PromiseIsHandled (true)



Steps:
1. new Promise constructor added to the callStack, which creates the Promise object with promiseState pending and promiseResult undefined
2. After resolve, promiseState is fulfilled and promiseResult is set (whatever the value is)
3. .then handler creates a promise reaction record which also creates a Promise Object (PromiseState is pending by default, PromiseResult is undefined)
4. PromiseState get fulfilled, PromiseResult is set to whatever the result is
5. if there is no further .then handler then

-----

What next?

Promise chaining, error handling

Async/await with try-catch

Parallel execution with Promise.all, Promise.race, Promise.allSettled

Callback hell vs Promises

-----

**NOTE :** Async await is better than Promise chains and promise-chains are better than callback hell. `Async-await >> promise-chain >> callback hell`

**Synchronous** = Step-by-step(in same order code written), waits for each step. 	Blocks next task until current finishes.

**Asynchronous** = Non-blocking, tasks can run independently, don't wait for each other. Faster for tasks like API calls, DB operations, file reads.

#### Callback hell

Nested callbacks stacked below one another forming pyramid structure.

```js
// Callback hell

function oneAfterOther(value, cbFunction){
  setTimeout(()=>{
console.log("Current value : ", value);
cbFunction();
},2000)
};

oneAfterOther(1, ()=> {
console.log("getting data2 ....");
oneAfterOther(2,()=>{
console.log("getting data3 ....");
oneAfterOther(3)
})}
)
```

## Promise ( resolve,reject  ||  .then, .catch  ||  Promise chains)

```js
const pro = new Promise((resolve,reject)=>{
    const x = Math.random();
    setTimeout(()=>{
        if(x < 0.5){
            resolve("Success babe")
        }
        else{
            reject("Failed, hit again")
        }
    },1000)
});

pro.then((result)=>{console.log(result)})
.catch((err)=>{console.log(err)})
```

### Promise chaining

```js
const pro = new Promise((resolve,reject)=>{
    resolve(5);
})

pro.then((result)=> result*3)
.then((result)=> result + 10)
.then((result)=> console.log(result));
```
