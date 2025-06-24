{
// Promise
new Promise ((resolve,reject)=>{
console.log(1);                            // Body will execute synchronously, it's only resolve which executes asynchronously
resolve(2)
})
.then(result => console.log(result))

console.log(3);
}

{
// Promise chaining
new Promise((resolve,reject)=>{
    resolve(1)                       
})
.then(result => result*2)
.then(result => result*2)
.then(result => console.log("1st promise result",result))
}



{
// Real world promise looks like this    
function loadImage(src){                              
    return new Promise((resolve, reject)=>{
        const img = new Image();
        Image.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    })
}

loadImage(src)
.then (image => resizeImage(image))
.then (image => addWatermark(image))
}

{
// Answer the order or execution
Promise.resolve()
  .then(() => console.log(1));

queueMicrotask(()=> console.log(2));

setTimeout(()=> console.log(3),0);

new Promise(()=> console.log(4));                  // Will execute synchronously

console.log(5);

(async () => console.log(6))();
    
}
