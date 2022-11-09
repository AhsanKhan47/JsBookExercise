import PromptSync from "prompt-sync";
import randomInteger from 'random-int';
let prompt = PromptSync();

let value1 = 12;
let value2 = 6;
let operator = "-";
// let operator = ["+", "-"];
// let randomOperator = randomInteger(1,2);
// operator = operator[randomOperator]
 
// This function will subtract two numbers if operator removed from function & added "+" operator, It'll add.
function basicCalculator(x, y, op){
    
    if(op === "-" ){
        console.log(x - y);
    }
    else {
        console.log(x + y);
    }
}

basicCalculator(value1, value2, "-");