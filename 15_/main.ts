let guestlist = ["Vishal", "Uroosa", "Faryal", "Rabia",];

let dontcome = guestlist[0];

console.log(dontcome, "nahi asakti");

guestlist.splice(0, 1, "Bushra");

guestlist.forEach(guest => console.log(`salam ${guest}, Would you like to Dinner with me? `));

