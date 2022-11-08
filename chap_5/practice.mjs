let mc = ["Makima","Poochta","Nezuko","Eren","Falco","Mikasa","Claudia"];
let notFound = true;

// while(notFound && mc.length > 0){
//     if(mc[0] === "Mikasa"){
//         console.log("Mikasa in chat");
//         notFound = false;
//     }
//     else{
//         mc.shift();
//     }
// }


//    Find method find the Item in array and return it
let findFalco = mc.find((f) => f === "Falco")
console.log(findFalco)

// includes method find the item and return boolean  value
let checkMikasa = mc.includes("Mikasa")
console.log(checkMikasa)

// for( let i = 0 ; i < mc.length; i++ ){
//     if(mc[i] === "Eren"){
     
//         console.log(findIndex(i))

//     }
//     else{
//         console.log("Not in the array")
//     }
// }
mc.find((value, index) => {
    console.log("Visited index ", index, " with value ", value);
  });


  let chainsawMan = {
    name : "chainsaw",
    type : "devil",
    nature : "baka",
 
}


for(let temp3 in arr){
  console.log()
}





for(let temp in chainsawMan){
  console.log()
}