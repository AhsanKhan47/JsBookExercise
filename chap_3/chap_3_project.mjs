const theList = 
[
    'Laurence', 'Svekis', true, 35, null, undefined,
    {test: 'one', score: 55},
    ['one', 'two']
];

theList.pop();
theList.shift();
theList.unshift("FIRST");
theList.splice(3, 1, "Hello World");
theList.splice(2,1,"MIDDLE")
theList.push("LAST")
console.log(theList)