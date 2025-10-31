# CONTENT => Promise execution 

Source => [https://www.youtube.com/watch?v=Xs1EMmBLpn4]

Promise is promise for eventual completion of task. It is an object in JS.  

Promise Object => 
1. PromiseState(*pending* by default) (pending or FullFilled/Resolved OR Rejected)
2. PromiseResult (*undefined* by default) 
3. PromiseReactionRecord (then handler creates this) => PromiseFulfillReactions (e.g .then((result) => console.log(result))) OR PromiseRejectReactions (e.g .catch((err) => console.log(err)));
4. PromiseIsHandled (true)



Steps:
1. new Promise constructor added to the callStack, which creates the Promise object with promiseState pending and promiseResult undefined
2. After resolve/reject, promiseState is fulfilled/rejected and promiseResult is set (whatever the value is)
3. .then handler creates a promise reaction record which also creates a Promise Object (PromiseState is pending by default, PromiseResult is undefined)
4. PromiseState get fulfilled, PromiseResult is set to whatever the result is
5. if there is no further .then handler then result is returned or printed.

**NOTE :** We create Promise reaction record (1. PromiseFulfillReactions, 2. PromiseRejectReaction) by chaining .then or .catch

-----

**NOTE :** Async await is better than Promise chains and promise-chains are better than callback hell. `Async-await >> promise-chain >> callback hell`

**Synchronous** = Step-by-step(in same order code written), waits for each step. 	Blocks next task until current finishes.

**Asynchronous** = Non-blocking, tasks can run independently, don't wait for each other. Faster for tasks like API calls, DB operations, file reads.

#### Callback hell

Nested callbacks stacked below one another forming pyramid structure.

```js
// Callback hell

{
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
)}

//OR

{
function fun1(value,callbck){
setTimeout(()=>{
console.log(value*value);
callbck(value*value,fun3)
},2000)
}
function fun2(value,callbck){
setTimeout(()=>{
console.log(value*value);
callbck(value*value,fun3)
},3000)
}
function fun3(value,callbck){
setTimeout(()=>{
console.log(value*value);
console.log("callback hell ends");
},4000)
}


fun1(3,fun2);
}
```

## Promise ( resolve,reject  ||  .then, .catch  ||  Promise chains)

Resolve is manual trigger for promise fulfill, if you call resolve than promise will get fulfilled and proceed it will not wait for other async task inside promise. So declear resolve "inside the async task itself" otherwise it will not wait for other async task to complete even if the value that we pass in resolve depend on some async task

```js
new Promise((resolve) => {
    let result;

    setTimeout(() => {
        console.log("Inside setTimeout 2sec");
        result = "Task Done";
    }, 2000);
    setTimeout(() => {
        console.log("Inside setTimeout 3sec");
        resolve(result);                       // Do not wait for other async task in Promise, even if resolve depend on some value 
    }, 3000);                                  // which is returned by async(will resolve with  undefined)
     setTimeout(() => {
        console.log("Inside setTimeout 4sec");
    }, 4000);
    console.log("Synchronus operation")
})
.then((data) => {
    console.log("Promise Resolved with:", data);
});
```

```js
const pro = new Promise((resolve,reject)=>{
    console.log("Hi");
    const x = Math.random();
    setTimeout(()=>{
        if(x < 0.5){
            console.log("Hello");
            resolve("Success babe")
        }
        else{
            console.log("Bye");
            reject("Failed, hit again")
        }
    },3000)
});

pro.then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
// Make this pro a function (wrap promise object inside function so that we can make call "only" when needed),
// otherwise it gets executed(by promise constructor) on declaration. 
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

### Promise object constructor internal

```js
class Promise {
    constructor(executor) {
        // Internal setup: state = pending, result = undefined

        // executor is the function with (resolve, reject)
        try {
            executor(this.#resolve.bind(this), this.#reject.bind(this));
        } catch (err) {
            this.#reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        // Attach handlers for fulfillment or rejection
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    finally(onFinally) {
        // Executes regardless of outcome
    }

    // Internal methods:
    #resolve(value) { /* logic to fulfill promise */ }
    #reject(reason) { /* logic to reject promise */ }
}

```
```js
Promise.prototype.then = function (callback) {        // pass a f/n ref, because it will call the f/n inside eventually, do not make call here.
    // When current Promise resolves:
    callback();  // Executes your function after resolution
};

```

#### NOTE: We usually wrap Promise inside a f/n so that we can create/return Promise on call. If we declare normally Promise will start executing immediately    

What next?

Parallel execution with Promise.all, Promise.race, Promise.allSettled.

-----
