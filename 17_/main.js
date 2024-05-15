// Creating a guest list array 
var guestlist = ["Humza", "Usman", "Ayesha", "Areeba"];
// Making variable for those guest who cant come
var dontcome = guestlist[0];
// Print the name of guest who who cant come 
console.log(dontcome, "nahi asakta ha");
// Add or remove values from guest list array 
guestlist.splice(0, 1, "Amirr");
// Message print for bigger table
console.log("Good news ! we have found a bigger table for dinner.");
// Adding a new guest at starting index of array 
guestlist.unshift("Ali");
// Adding a new guest at ending index of array 
guestlist.push("Zain");
// Get a middle index of our list array 
var middleIndex = Math.floor(guestlist.length / 2);
// Adding a new guest to middle index of array 
guestlist.splice(middleIndex, 0, "Osama");
// Print mesage of updated list 
console.log("Updated list of our guests");
// Sending a invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me?")); });
// Inform that only two guests can be invited for dinner
console.log("unfortunately, the new guest dinner table wont arrive on time, so I can only invite two gueststo dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("sorry, ".concat(removeguest, " I cant invite you to dinner"));
}
// Sending a invitations to the last two guests on the list 
console.log("Invitations to the last two guests:");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guests from the list 
guestlist.pop();
guestlist.pop();
console.log("empty list:", guestlist);
