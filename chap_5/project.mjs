let tablez = [];
let tableOf = 3;

let cols = 11;
let rows = 11;


for (let i = 0; i < rows; i++) {
    tablez.push([]);
    for (let j = 0; j < cols; j++) {
        tablez[i].push([i] * [j])
    }
}


console.table(tablez)