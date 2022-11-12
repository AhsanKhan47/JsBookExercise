import PromptSync from "prompt-sync";
let prompt = PromptSync(); 

function greet(){
    let name = prompt("what is your name? ");
    console.log(`Hello ${name}! `)

}
// greet();


// Arrow function 
let doStuff = (x, y) => console.log(x + y);
// doStuff(2, 8);

// let sprd = ["This", "is", "spread", "Array Items" ];
// let words = ["delirious", "brittle", "brilliant", "boundless", "boundless", "adorable", "adventurous"];

// For of loop 
// for (const temp of words)  console.log(temp)

// For each array method
// words.forEach(e => console.log(e))


// spread and rest operator

// let sprd = [2, 3];
// let words = ["delirious", "brittle", ...sprd, "brilliant"];
// console.log(words);

// function addNo (a, b){
//     console.log(a + b)
// }
// addNo(...sprd)





// Returning function values
function add(a, b) { 
    return a + b
}

let addNm = add(3,3)
console.log(addNm)


// function variable
// let hi = (a) => {
//     console.log(a)

// }

// hi("hiii")


// var scope 

//This time, we won't get an error. When we use a var variable before the define
// statement, we simply get undefined. This is due to a phenomenon called hoisting,
// which means using a var variable before it's been declared results in the variable
// being undefined rather than giving a ReferenceError

// function doingStuff() {
//     if (true) {
//     console.log(x);
//     var x = "local";
//     }
//     }
//     doingStuff();s


// IIFE 

let x = ()=> console.log("heyyy")
x()