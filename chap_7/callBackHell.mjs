// callback hell in javascript

// In short, callback hell means that you have multiple functions that are asynchronous.
// Those functions depend on each other, which might, in turn, get quite messy with a 
// lot of callback function that is nested in multiple layers. This will result in
// chaos, and you will end up with code which is hard to read and maintain.

let stocks = {
  fruits: ["banana", "apple", "mango", "vanilla"],
  liquid: ["ice", "water"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let order = (fruit_name, call) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} is selected`);
    call(); // now when the producion order is finished then the production will be started
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Thanks for the call, Production is started");

    setTimeout(() => {
      console.log("The food has been chopped.");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("The machine is started");

          setTimeout(() => {
            console.log(`Ice cream was placed on the ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]}  was added as toppings.`);

              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, );
};

order(0, production);

