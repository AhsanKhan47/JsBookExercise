import PromptSync from "prompt-sync";

let prompt = PromptSync();
let age = Number(prompt("Enter your age."));
console.log(age)
if(age >=21 ){
    console.log("You're eligble to enter the venue and buy coke.")
}
else if(age >= 19){
    console.log("You're eligble to enter the venue but can't purchase coke.")
}
else{
    console.log("Sorry, You are not allowed to enter the Venue")

}