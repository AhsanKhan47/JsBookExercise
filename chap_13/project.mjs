let acceptedPassword = ["mustang", "gtr", "honda", "toyota"]
let passCheck;


function passCheckFunction(value){
     passCheck = acceptedPassword.includes(value);
    console.log(passCheck)
}


function passPromise(value) {
    return new Promise((resolve, reject)=> {
        passCheckFunction(value)
        if(passCheck){
            resolve(`Correct password. Pass status : ${passCheck}`)
        }
        else{
            reject(`Incorrect password. Pass status : ${passCheck}`)
        }
    })
    .then((value)=> console.log(value))
    .catch((error)=> console.log(error))
}

passPromise("mustang")