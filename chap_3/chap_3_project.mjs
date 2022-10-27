const theList = 
[
    'Laurence', 'Svekis', true, 35, null, undefined,
    {test: 'one', score: 55},
    ['one', 'two']
];

theList.pop();
theList.shift();
theList.unshift("FIRST");
theList.splice(3, 4, "Hello World");
theList.splice(2,1,"MIDDLE")
theList.push("LAST")
console.log(theList)

// Company product catalog

const store = [];
let item1 = {
    name : "Bugatti Chiron",
    model : 2022,
    cost : "$33lac",
    quantity: 6
};
let item2 = {
    name : "Mercedes AMG",
    model : 2021,
    cost : "$24lac",
    quantity: 8
};
let item3 = {
    name : "Porsche",
    model : 2018,
    cost : "23lac",
    quantity: 32
};
store.push(item1, item2, item3)
console.log(store)
console.log(store[2].quantity)
console.log(store)
//expeimenting
store[2].quantity = "No confirmed";  
console.log(store)
store[1].forSale = false;
console.log(store)


