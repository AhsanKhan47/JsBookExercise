//   For in loop in object
let chainsawMan = {
    name : "chainsaw",
    type : "devil",
    nature : "baka",
 
}
for(let prop in chainsawMan){

    console.log(` ${[prop]} : ${chainsawMan[prop]} `)
}

// for of loop for object
let chainsawKeys = Object.keys(chainsawMan)
console.log(`chainsaww keysss : ${chainsawKeys}`)

for(let prop2 of chainsawKeys){
    console.log(prop2)
}
// ------- using  simple for loop with object.keys method 
for (let i = 0; i < chainsawKeys.length; i++) {
    console.log(`${chainsawKeys[i]}: ${chainsawMan[chainsawKeys[i]]}`)
}
// for of loop with Object.entries method
let entries = Object.entries(chainsawMan)
console.log(entries)
for( const [key, value] of entries){
    console.log(`${key} : ${value}`)
}

//  for of and for in loop in array

let cm = ["chainsaw", "devil", "baka"];

for(let temp of cm){
    console.log(`from For in looop in array ${temp}`)
}

for(let temp in cm){
    console.log(`from For in looop of array ${cm[temp]}`)
}

