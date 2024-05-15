var guestlist = ["Vishal", "Uroosa", "Faryal", "Rabia",];
var dontcome = guestlist[0];
console.log(dontcome, "nahi asakti");
guestlist.splice(0, 1, "Bushra");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", Would you like to Dinner with me? ")); });
