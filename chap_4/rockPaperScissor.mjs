import PromptSync from "prompt-sync";
import randomInteger from 'random-int';
let prompt = PromptSync();

let choices = ["rock", "paper", "scissor"];

let randomNo = randomInteger(0,2);
let computerInput = choices[randomNo];

let usserInput = Number(prompt("Select 0 for Rock, 1 for Paper & 2 for Scissor"));

usserInput = choices[usserInput];

if(computerInput === usserInput){
   console.log(`Draw You Selected ${usserInput} and Computer Selected ${computerInput} `);
}
else if(computerInput === "rock" && usserInput === "paper"){
    console.log(`You win! You Selected ${usserInput} and Computer Selected ${computerInput} `);
}
else if(computerInput === "paper" && usserInput === "rock"){
    console.log(`Computer win! You Selected ${usserInput} and Computer Selected ${computerInput} `);
}
else if(computerInput === "rock" && usserInput === "scissor"){
    console.log(`Computer win! You Selected ${usserInput} and Computer Selected ${computerInput} `);
}
else if(computerInput === "scissor" && usserInput === "rock"){
    console.log(`You win! You Selected ${usserInput} and Computer Selected ${computerInput} `);
}
else if(computerInput === "paper" && usserInput === "scissor"){
    console.log(`You win! You Selected ${usserInput} and Computer Selected ${computerInput} `);
}
else if(computerInput === "scissor" && usserInput === "paper"){
    console.log(`Computer win! You Selected ${usserInput} and Computer Selected ${computerInput} `);
}
else{
    console.log(`Please select correct value`);
}




