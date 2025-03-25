Promise.resolve().then (()=> console.log(1));

setTimeout(()=> console.log(2));
setTimeout(()=>console.log(6),10);

queueMicrotask(()=>
{
console.log(3)
queueMicrotask(()=> console.log(4))
}
);

console.log(5);