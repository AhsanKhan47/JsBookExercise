// Objects in object and array in objects

let Microsoft = {
    name : "MS",
    cofounders : ["Mohsin Burger","Ahsaan Bezos","maria"],
    founder : "Bill gates",
    established : 1992,
    address : {
        street : "43rd down",
        house : "21th",
        zipCode : 4343,
        forBid : false
    },
    country : "USA"
};
// console.log(Microsoft);
// Microsoft.established = 1997;
// console.log(Microsoft)
// Microsoft.address.zipCode =5555;
// console.log(Microsoft.cofounders[1]);

//Object in array
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
    }];

    // console.log(addresses)
    // console.log(addresses[1].zipcode)

    //OBJECT IN ARRAY IN OBJECT

    let Company = {
        name : "MS",
        cofounders : ["Mohsin Burger","Ahsaan Bezos","maria"],
        founder : "Bill gates",
        established : 1992,
        addresses : [
            {
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
            },
            {
            street: "1st West avenue",
            number: "5",
            zipcode: "75001",
            city: "Addison",
            state: "Texas"
            }],
        country : "USA"
    };
    console.log(Company.addresses[0].street)