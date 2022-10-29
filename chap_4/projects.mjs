import PromptSync from "prompt-sync";
let prompt = PromptSync();

// Evaluating a number game

// let randomNumber = Math.random();
// randomNumber = randomNumber * 5;
// randomNumber = Math.floor(randomNumber);

// let userValue = Number(prompt("Enter the number "));

// if(userValue === randomNumber){
//     console.log(`The Number you entered is equal to the dynamic number${randomNumber}`);
// }
// else if(userValue > randomNumber){
//     console.log(`The Number you entered is Greater than the dynamic number ${randomNumber}`);
// }
// else if(userValue < randomNumber){
//     console.log(`The Number you entered is Smaller than the dynamic number${randomNumber}`);
// }

// Friend checker game

// let aotCharacters = ["Eren", "Makima", "Mikasa", "Armin", "Reiner", "Annie"]

let userInput = prompt("Enter the Aot characters names");

switch(userInput){
    case "Eren":
    case "Makima":
    case "Mikasa":
    case "Armin":
    case "Reiner":
    case "Annie":
    console.log("Correct! they are aot characters!!! Tatakae");
    break;

    default:
    console.log("Ops! they are not Aot characters.")
    
}