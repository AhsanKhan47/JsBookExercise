import randomInterger from "random-int";
import PromptSync from "prompt-sync";
let prompt = PromptSync();

function getNameDescription(){
    
    let randomNumber = randomInterger(1,7)
    let words = ["delirious", "brittle", "brilliant", "boundless", "boundless", "adorable", "adventurous"];
    let name = prompt("Enter you name to get description.");
    let selectedWord = words[randomNumber];
    console.log(`${name} is ${selectedWord}`);

}
getNameDescription();