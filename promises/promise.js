new Promise((resolve,reject)=>{
    resolve(1)
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