# JS Runtime => JS Engine, Event loop, web APIs, micro/task queue

JS Engine(Call stack, heap), Event loop, web APIs, micro/task queue => All this together allow us to use asynchronous task in a non-blocking way in JS.

JS is single threaded (We have only one call stack), it can handle only one task at a time, we can use Web APIs to interct with the features leaverage by the browser and some of these APIs  allow to initiate async task in background

### 1. Call stack => Execution context is created in call stack, handles one task at a time.

### 2. Web APIs => Provide us interface to interact with browser's feature. [fetch API, Timer API(setTimeout(), setInterval()), Geolocation, WebStorage API (localStorage, sessionStorage), HTML DOM]. Some of this APIs offload(transfer load/long running task from call stack to browser). This offloading can be either callback based or promise based.

**Callbacks =>** ``` setTimeout(()=> console.log("Done"), 5000)```
```navigator.geolocation.getCurrentPosition( position => console.log(position),  error => console.error(error)  )```

**Promises(then,await) =>** ```fetch("...").then(res => ...)``` ``` const [fileHandle] = await window.showOpenFilePicker();```

### 3. Task queue(callback queue)=> Holds callback based APIs and envent handlers once the asynchronous task done, to execute at some point later

### 4. Microtask queue - Only used by 
promise handlers ``` .then(()=>{...}); .catch(()=>{...}); .finally(()=> {...})```
async f/n bodies ``` async function asyncFunc(){ await ... } ```
queue microtask queue callbacks ```queueMicrotask(()=>{...});```
new MutationObserver callbacks ```new MutationObserver (()=>{...})```

**NOTE :** After handling *each* task from task queue, event loops checks the microtask queue to ensure that nothing has been added to microtask queue in the meantime.
