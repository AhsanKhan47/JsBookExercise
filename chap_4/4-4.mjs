import PromptSync from 'prompt-sync';
let prompt = PromptSync();

let guessNo = Number(prompt("Guess the number between 0-3"));

let randomNumber = Math.random();
randomNumber = randomNumber * 3;
randomNumber = Math.floor(randomNumber)
// console.log(randomNumber)
switch(guessNo){
    case randomNumber:
    console.log("Correct");
    break; 
    
    // case 1:
    // console.log("Correct");
    // break; 

    // case 2:
    // console.log("Correct");
    // break; 
    default:
        
    console.log("try again")
    break;
}
console.log(`Hey, The number you entered is ${guessNo} the correct answer is ${randomNumber}`);