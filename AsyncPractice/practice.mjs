// let promise = new Promise ((resolve, reject)=>{
//     let marks = 50;
//         if(marks > 33){
//             resolve(console.log(` Your marks are ${marks}`))
//         }
//         else{
//             reject(console.log("Too low value"))
//         }

//     })
//     promise.then(

//         console.log("Success:")


//         )
//         .catch(console.log(""))
//    console.log(promise)

// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = 20;
//     if (x > 10) {
//     resolve(x); // on success
//     } else {
//     reject("Too low"); // on error
//     }
//     });
//     promise.then(
//     function (value) {
//     console.log("Success:", value);
//     },
//     function (error) {
//     console.log("Error:", error);
//     }
//     );

function order() {


    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Order placed")

        }, 1000)
    })
}

function delivery() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Order delivered")

        }, 3000)
    })
}


async function getOrder() {
    const orderplaced = await order();
    console.log(orderplaced);
    const gerDelivery = await delivery();
    console.log(gerDelivery);

}
getOrder()
console.log("heyyy I am synchronous code.")