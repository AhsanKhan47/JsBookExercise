import PromptSync from "prompt-sync";
import randomInteger from 'random-int';
let prompt = PromptSync();

let value1 = 12;
let value2 = 6;
let operator = "-";
let pushArray = [];


// This function will subtract two numbers if operator removed from function & added "+" operator, It'll add.
function basicCalculator(x, y, op){
    
    if(op === "-" ){
        console.log(x - y);
    }
    else {
        console.log(x + y);
    }
    return x,y;

}

for (let i = 1; i < 11; i++) {
    let result = basicCalculator(i, 5*i,"+")
    pushArray.push(result)
}
