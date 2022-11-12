//Create a recursive function that counts up to 10. Invoke the function with different
// start numbers as the arguments that are passed into the function. The function
// should run until the value is greater than 10

function countToTen(startValue){
    console.log(startValue)
    if(startValue < 10){
        countToTen(startValue + 1)
    }
}
countToTen(2)

// SetTimeout Order 

let one = () => console.log("One");
let two = () => console.log("Two");
let three = () => {
    console.log("Three")
    one();
    two();
};
let four = () => {
    console.log("Four")
    three();
};
four();
setTimeout(one, 1000)

