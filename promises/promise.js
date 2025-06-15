new Promise((resolve,reject)=>{
    resolve(1)                       // new promise constructor body executes syncrounously
})
.then(result => result*2)
.then(result => result*2)
.then(result => console.log("1st promise result",result))



// function loadImage(src){                              // Real world promise looks like this
//     return new Promise((resolve, reject)=>{
//         const img = new Image();
//         Image.onload = () => resolve(img);
//         img.onerror = reject;
//         img.src = src;
//     })
// }

// loadImage(src)
// .then (image => resizeImage(image))
// .then (image => addWatermark(image))


new Promise ((resolve,reject)=>{
    console.log(1);
    resolve(2)
})
.then(result => console.log(result))

console.log(3);

{
    Promise.resolve()
      .then(() => console.log(1));

    queueMicrotask(()=> console.log(2));

    setTimeout(()=> console.log(3),0);
    
    console.log(4);

    new Promise(()=> console.log(5));

    (async () => console.log())();
    
}
