# JS Runtime => JS Engine, Event loop, web APIs, micro/task queue

Source [https://www.youtube.com/watch?v=eiC58R16hb8]

JS Engine(Call stack, heap), Event loop, web APIs, micro/task queue => All this together allow us to use asynchronous task in a non-blocking way in JS.

JS is single threaded (We have only one call stack), it can handle only one task at a time, we can use Web APIs to interct with the features leaverage by the browser and some of these APIs  allow to initiate async task in background

### 1. Call stack

Execution context is created in call stack, handles one task at a time.

### 2. Web APIs

Provide us interface to interact with browser's feature. [fetch API, Timer API(setTimeout(), setInterval()), Geolocation, WebStorage API (localStorage, sessionStorage), HTML DOM]. Some of this APIs offload(transfer load/long running task from call stack to browser). This offloading can be either callback based or promise based.

**Callbacks =>** ``` setTimeout(()=> console.log("Done"), 5000)```
```navigator.geolocation.getCurrentPosition( position => console.log(position),  error => console.error(error)  )```

**Promises(then,await) =>** ```fetch("...").then(res => ...)``` ``` const [fileHandle] = await window.showOpenFilePicker();```

When we work with promises, we work with microTask queue

### 3. Task queue(callback queue)

Holds callback based APIs and envent handlers once the asynchronous task done, to execute at some point later

### 4. MicroTask queue - Only used by 
promise handlers ``` .then(()=>{...}); .catch(()=>{...}); .finally(()=> {...})```
async f/n bodies (F/n body execution after await) ``` async function asyncFunc(){ await ... } ```
queue MicroTask queue callbacks ```queueMicrotask(()=>{...});```
new MutationObserver callbacks ```new MutationObserver (()=>{...})```

**NOTE :** After handling *each* task from task queue, event loops checks(continuous) the MicroTask queue to ensure that nothing has been added to MicroTask queue in the meantime, if something added to microTask meanwhile, the event loop will prioritize microTask first.

**NOTE :** When you have setTimeout delay, it's the delay until it moves to *task queue*, not the call stack. The callback will go to callStack only if callStack and microTask queue is empty.


So the priority =>   callStack > microTask queue > task/callback queue

<<<<<<< HEAD
Test your JS knowledge => [https://www.youtube.com/watch?v=IHQcma93fpE]
=======
Event lop model =>no parallel command execution, efficient for CPU bound task, concurrency via non-blocking I/O
>>>>>>> de62e94fd0093287355f9de6783175ccac0ee964
