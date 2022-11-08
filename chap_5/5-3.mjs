let myWork = [];

for(let i=1; i <11; i++){
    let status = i % 2 ? true : false;
    let temporary = {
        name : `lesson ${i}`,
        status : status
    }
    myWork.push(temporary);
}
console.log(myWork)