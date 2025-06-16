try{
    const x = 10/0;
    console.log(x);
    addlert("welcome");                            // An error
}
catch(err){
    console.log("ErrMsg =>", err.message, "ErrName =>",err.name)
}
finally{
    console.log("JAI SHREE RAM")
}



// throw statement
let x = "2";                              // Change the value of x and see the diff results.
  try {
    if(x.trim() == "") throw {name: "Empty", message: "Kya kr ra h bhai, kuch to value daal"};
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log("Input is ", err);
  }
