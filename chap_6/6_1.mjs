import PromptSync from "prompt-sync";
let prompt = PromptSync(); 
let value1, value2;

function addValues(value1, value2){
    value1 = Number(prompt("Enter first value "))
    value2 = Number(prompt("Enter second value to add "))
    let result = value1 + value2;
    console.log(result);
}

addValues(value1, value2);


let result2;

function add(v1, v2){
      result2 = v1 + v2;
      console.log(result2)

}
// add(3,4);
