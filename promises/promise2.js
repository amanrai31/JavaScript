 // Parallel chaining VS sequential chaining

// QESTION => Task 1 takes 1 second and resolves "Task 1 Complete". Task 2 takes 2 seconds and resolves "Task 2 Complete".
// Task 3 takes 1 second and resolves "Task 3 Complete". Chain them so they run one after another, and log messages after each.

{
  
const pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Task 1 complete.")
    },1000)
})

pro.then((result)=>{console.log(result);})
.then(()=> {
    setTimeout(()=>{console.log("Task 2 complete.")},2000)
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
  .then(task2)         // If your function returns a Promise, never call it inside .then()
  .then(task3)
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
 resolve(10);

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
}
