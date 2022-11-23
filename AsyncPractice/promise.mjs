// Promise and Async await
function checkMood() {
    return new Promise((resolve, reject) => {
        let mood = 8;
        if (mood >= 5) {
            resolve("Mood is stable")
        }
        else {
            reject("Mood is down! Need cuddle")
        }
    })
}

function checkName() {
    return new Promise((resolve, reject) => {
        let name = "Ahsan";
        if (name === "Ahsan") {
            resolve("The name is Ahsan")
        }
        else {
            reject("The name is Unknown")
        }
    })
}




// checkMood()
//     .then((param1) => {
//         console.log(param1)
//         return checkName();
//     })
//     .then((param2) => {
//         console.log(param2)
//     })

//     .catch((error) => {
//         console.log(error)
//     })



// Async await function

async function getResult() {
    try {
        let moodResults = await checkMood();
        console.log(moodResults)
        let nameResult = await checkName();
        console.log(nameResult)

    } catch (error) {
        console.log(error)
    }
}
getResult()