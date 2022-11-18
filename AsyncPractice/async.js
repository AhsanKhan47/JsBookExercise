let store = {
    ing : [ "noodles", "masala", "water"]
};

let shopOpen = true;

let order = (time , work) => {

    return new Promise((resolve, reject) => {
        
        if(shopOpen){

            setTimeout(() => {
                resolve(work());
            }, time);
    
        }
        else{
            reject(console.log("sorry the shop is closed"))
        }


    })
   
}

order(2000, ()=>console.log(`${store.ing[0]} was selected`))
.then(()=> {
    return order(1000, ()=>console.log(`${store.ing[1]} was selected`));
})
.then(()=> {
    return order(1000, ()=> console.log(`${store.ing[2]} was selected`))
})

.catch(()=> console.log("Customer left"))
.finally(()=> {
    setTimeout(() => {
        console.log("day ended")
    }, 1000);
})