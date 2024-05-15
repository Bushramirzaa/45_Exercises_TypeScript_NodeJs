// define a function with a rest parameterthat accept item arrgments representing our sandwich
function makeSandwich(...items: string[]){
console.log("\nMaking a sandwich with the following items: \n");

items.forEach(singleItem => console.log("-" + singleItem));

console.log("\nNow Enjoy Sandwich");
}

// call the function 3 time with 3different number of arguments 
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Chicken", "Cheese", "Llettuce", "Tomato");







