import PromptSync from "prompt-sync";
let prompt = PromptSync(); 

// Exe 6.5 (slightly diff approach)
let no = "1000";

// (function iife() {
//    let no = "2000";
//    console.log(no);
//    no = "20";
//    let result = no;
//    console.log(result)

// })();

((obtainedMarks) =>{


    let passingMarks = 33;

    if(obtainedMarks >= passingMarks){
        console.log(`Congratulations! You're passed, your marks are ${obtainedMarks} passing marks : ${passingMarks}`);
    }
    else{
        console.log(`You failed! Better luck next time`);
    }
 
 })(32);