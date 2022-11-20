let pr = new Promise((resolve, reject)=>{
    resolve("Start counting")
    
})
// s

function counter(value){
    console.log(value)
}
pr 
.then(value => {counter(value); return "one"})
.then(value => {counter(value); return "two"})
.then(value => {counter(value); return "three"})
.then(value => {counter(value);});