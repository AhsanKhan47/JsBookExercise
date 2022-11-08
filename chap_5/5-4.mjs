let myTable = [];
let counter = 0;
let rowz = 4;
let colz = 5;
let tempTable= [];
// myTable.push(rows,cols)
// console.log(myTable)


for (let i = 0; i < rowz; i++) {
    myTable.push([]);
    for (let j = 0; j < colz; j++) {
        myTable[i].push("gg")
        counter = counter + 1
    }

    tempTable.push(counter)

}
console.log(counter)
console.log(tempTable)
console.log(`There are ${tempTable[0]} Columns & ${tempTable.length} Rows and ${counter} Cells`)
console.table(myTable)

