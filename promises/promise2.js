// Parallel chaining VS sequential chaining

// QESTION => Task 1 takes 1 second and resolves "Task 1 Complete". Task 2 takes 2 seconds and resolves "Task 2 Complete".
// Task 3 takes 1 second and resolves "Task 3 Complete". Chain them so they run one after another, and log messages after each.

{
// Parallel
  
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
  .then(task2)
  .then(task3)
  .then(() => {
      console.log("All tasks done");
  });

}

{
  // Parallel execution
  Promise.all([task1(), task2(), task3()])
}
