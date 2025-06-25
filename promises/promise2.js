 // Parallel chaining VS sequential chaining

// QUESTION => Task 1 takes 1 second and resolves "Task 1 Complete". Task 2 takes 2 seconds and resolves "Task 2 Complete".
// Task 3 takes 1 second and resolves "Task 3 Complete". Chain them so they run one after another, and log messages after each.

{
  
const pro = new Promise((resolve,reject)=>{
 console.log("Initiating the task");
    setTimeout(()=>{
        resolve("Task 1 complete.")
    },1000)
})

pro.then((result)=>{console.log(result);})
.then(()=> {                                                 // this is not pure sequential as .then will create new promise(by default)and resolve it instantly and will set value
    setTimeout(()=>{console.log("Task 2 complete.")},2000)   // to undefined and state to fulfilled and goes for next .then. This timeout is not the part of that newly create Promise.
}).then(()=> {
    setTimeout(()=>{
        console.log("Task 3 complete")
    },3000)
});
 
}

{
  // Sequential
 const task1 = () => new Promise(resolve => {
    setTimeout(() => {
        console.log("Task 1 complete");
        resolve();
    }, 1000);
});

const task2 = () => new Promise(resolve => {
    setTimeout(() => {
        console.log("Task 2 complete");
        resolve();
    }, 2000);
});

const task3 = () => new Promise(resolve => {
    setTimeout(() => {
        console.log("Task 3 complete");
        resolve();
    }, 3000);
});

task1()
  .then(task2)   // If your function returns a Promise, never call it inside .then(). Also we can write .then(()=> task()).. task2 and task3
  .then(task3)  // are basically Promise indide then. If we do not pass our promise then "then" creates a promise & resolves(return nothing) and goes to next "then"
  .then(() => {
      console.log("All tasks done");
  });

}

{
  // Parallel execution
  Promise.all([task1(), task2(), task3()])
}

{
  //Guess the order of execution => await queues microtasks before .then() callbacks, when they share the same Promise.
 const pro = new Promise((resolve,reject)=>{
 console.log("1");                         // Promise constructor takes this executor f/n as parameter and executes it.
 setTimeout(()=>{
 console.log("before resolve, inside timeout");
 resolve(10);
 console.log("after resolve, inside timeout");
},2000)
});

const func=async()=>{
console.log("2")
const a=await pro
console.log("3")
}
 
func()
 
pro.then(()=>console.log("4"));
console.log("5");
// We usually wrap Promise inside a f/n so that we can execute Promise on call. If we make promise obj out of Promise constructor, Promise will start executing  
// immediately because Promise constructor calls the executor f/n. The "promise obj" will have promiseState pending and promiseResult undefined "till" promise is resolved/rejected.
 // Once promise is resolved/rejected then promise object will have promiseState set to fulfilled/reject and promiseResult will have someValue/undefined.

}
