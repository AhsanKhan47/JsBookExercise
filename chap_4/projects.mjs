import PromptSync from "prompt-sync";
let prompt = PromptSync;

let randomNumber = Math.random();
randomNumber = randomNumber * 5;
randomNumber = Math.floor(randomNumber);

let userValue = Number(prompt("Enter the number "));
let defulte = " less, geater"
