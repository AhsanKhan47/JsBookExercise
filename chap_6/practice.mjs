import PromptSync from "prompt-sync";
let prompt = PromptSync(); 

function greet(){
    let name = prompt("what is your name? ");
    console.log(`Hello ${name}! `)

}
greet();