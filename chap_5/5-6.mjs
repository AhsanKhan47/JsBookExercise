//  5.6
// For of loop used for array
let someArray = [];

for (let i = 1; i < 11 ; i++) {

    someArray.push(i);
    
}
console.log(someArray)

for (const temp of someArray) {
    console.log(temp)
}

// for in loop  For Objects

let chainsawMan = {
    name : "chainsaw",
    type : "devil",
    nature : "baka",
    heart : "poochta"
}
for(let prop in chainsawMan){

    console.log(chainsawMan[prop])
}

console.log()