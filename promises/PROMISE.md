## Promise execution & async/await

Source => [https://www.youtube.com/watch?v=Xs1EMmBLpn4]



Promise Object => 
1. PromiseState(*pending* by default) (pending or fullFilled)
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
