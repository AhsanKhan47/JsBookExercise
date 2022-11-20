let promise = new Promise ((resolve, reject)=>{
let marks = 50;
    if(marks > 33){
        resolve(console.log(` Your marks are ${marks}`))
    }
    else{
        reject(console.log("Too low value"))
    }

})
.then(
   
    console.log("Success:", value)
   
   
    )
    .catch(console.log(""))
promise(33)