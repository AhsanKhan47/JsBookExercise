import PromptSync from "prompt-sync";
let prompt = PromptSync();

let mood = Number(prompt("On a scale from 0-10 how Happy are you?"));
let selection = "My Selection";
console.log(`${selection} : ${mood}`)
switch(mood){
    case 0:
    case 1:
    case 2:
    case 3:
    console.log("Jeeez! You need to see a therapist.")
    break;

    case 4:
    case 5:
    case 6:
    case 7:
    console.log("Dammm bro, You are doing good.")
    break;

    case 8:
    case 9:
    case 10:
    console.log("Wow You are super happy.")
    break;

    default:
    console.log("Incorrect Entry! Please set value in between 0-10.")
    break;
}