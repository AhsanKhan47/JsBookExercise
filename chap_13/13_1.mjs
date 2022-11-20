


 function greet(fn){
    console.log(`Hello ${fn[0]} ${fn[1]}! thanks for not bleeding on others.`)
}


 function greetTwo(user, callback){
     let newFullName = user.split(" ")
     callback(newFullName)

    }
     greetTwo("steve harward", greet )
