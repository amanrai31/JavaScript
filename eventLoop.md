# Event loop, web APIs, micro/task queue

 JS is single threaded, it can handle only one task at a time, we can use Web APIs to interct with the features leaverage by the browser and some of these APIs  allow to initiate async task in background

 Task queue(callback queue) is used by callback based APIs to en-queue the callback once the asynchronous task.

 Microtask queue - Only used by 
 promise handlers ``` .then(()=>{...}); .catch(()=>{...}); .finally(()=> {...})```
