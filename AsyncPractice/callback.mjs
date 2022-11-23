// function call() {
//     console.log("This is sychronous.")
// }

// function async(param) {
//     setTimeout(() => {
//         param("This is Asynronous")
//     }, 1000);
// }
// function callback(pm){
//     console.log(pm)
// }
// call()                    // synchronous function
// async(callback)          // Asyn function with callback

function makeToast(param4) {

    setTimeout(() => {
        param4("Toast is ready")
    }, 1000);
}
// function toastCb(param4){
//     console.log(param4)
// }

function makeFryAnda(param1){
    setTimeout(() => {
        param1("Anda is Fried")
    }, 2000);
}

// function cb1(param2) {
//     console.log(param2)
// }

makeToast((arg1)=> {
    console.log(arg1)
    makeFryAnda((arg2)=> console.log(arg2))
})


// makeFryAnda((param3)=> console.log(param3) )
