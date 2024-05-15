// Making a array of countries and print orginal order 
let countriesTovVisit: string[] = ["Chaina" , "Denmark", "Brazil", "Argentine"];
console.log("Orginal Order :" , countriesTovVisit );

// Print the array in alphabetical order without modifing the actual list 
console.log("Alphabetical order:", [...countriesTovVisit].sort());

// Show that the array is still its orginal order 
console.log("Still in orginal order:" , countriesTovVisit );

// Print the array in reverse order without modifying the actual array list 
console.log("Reverse order:" , [...countriesTovVisit].reverse());

// Show that the array is still its orginal order 
console.log("Still in orginal order:" , countriesTovVisit);

// We have change the orginal array order now 
console.log("orginal array reverse:", countriesTovVisit.reverse());

// Print the array to show that its back to its orginal order 
console.log("back to orginal order:", countriesTovVisit.reverse());

// Print the array to show that its order has been changed in alphabetical order now 
console.log("sorted in alphabetical order:",countriesTovVisit.sort());

// We have change again the orginal array order now in reverse order again 
console.log("orginal array reversed again:", countriesTovVisit.reverse());
