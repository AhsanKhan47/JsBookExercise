let startValue = 10;

function countdown(startValue){

    console.log(startValue);

    if(startValue < 1){
        return startValue;
    }
    else if(startValue > 1){
        countdown(--startValue);

    }
  
}
countdown(startValue)
