import PromptSync from 'prompt-sync';
let prompt = PromptSync();


let guessNo = Number(prompt("Guess the number between 0-5"));

let randomNumber = Math.random();
randomNumber = randomNumber * 5;
randomNumber = Math.floor(randomNumber)
// console.log(randomNumber)
switch(randomNumber){
    case 0:
    console.log("Correct");
    break; 
    
    case 1:
    console.log("Correct");
    break; 

    case 5:
    console.log("Correct");
    break; 
    default:
        
    console.log("guessed number out of range")
    break;
}
console.log(`Hey, The number you entered is ${guessNo} the correct answer is ${randomNumber}`);