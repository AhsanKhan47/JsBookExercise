// let counterValue = 0;

// function counter(value) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             counterValue++;
//             resolve(`value = ${value} counter = ${counterValue}`)
//         },1000)
//     })
    
// }

// async function asyncCounter(value){
//         console.log(`value = ${value} counter = ${counterValue}`)

//     let resolvedValue = await counter(value);
//     console.log(resolvedValue)
// }

// for (let i = 1; i < 4; i++) {
//     asyncCounter(i);
    
// }

let counter = 0;

function counterPromise(value){
    return new Promise((resolve)=> {
        setTimeout(() => {
            counter++
            resolve(`Value = ${value} Counter = ${counter}`)
        }, 1000);
    })
}

async function asyncCounter(value){
    console.log(`Value = ${value} Counter = ${counter}`)
    let resolvedPromise = await counterPromise(value);
    console.log(resolvedPromise)
}

for(let i = 1; i < 4; i++){
    asyncCounter(i)
}