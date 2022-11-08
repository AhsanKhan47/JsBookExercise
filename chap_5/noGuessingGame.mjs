import PromptSync from "prompt-sync";
import randomInterger from "random-int";
let prompt = PromptSync();

let answer = true;
let randomNumber = randomInterger(1,6);


while(answer){
    let userGuess =  Number(prompt("Guess the Number between 1-5"))
    console.log(`User guess : ${userGuess} Random no ${randomNumber}`)
   
   if(userGuess === randomNumber){
    console.log(`Correct Guess Your asnwer is ${userGuess} which is correct guess`)
    answer = false
    break;
   }
   else if(userGuess > randomNumber){
    console.log("Your answer is slightly greater try again");
   }
   else if(userGuess < randomNumber){
    console.log("Your answer is slightly smaller try again");

   }
   else{
    console.log("Wrong entry Please enter a number between 1 to 5")
   }
}