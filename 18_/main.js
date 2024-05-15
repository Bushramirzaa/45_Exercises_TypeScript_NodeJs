var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print orginal order 
var countriesTovVisit = ["Chaina", "Denmark", "Brazil", "Argentine"];
console.log("Orginal Order :", countriesTovVisit);
// Print the array in alphabetical order without modifing the actual list 
console.log("Alphabetical order:", __spreadArray([], countriesTovVisit, true).sort());
// Show that the array is still its orginal order 
console.log("Still in orginal order:", countriesTovVisit);
// Print the array in reverse order without modifying the actual array list 
console.log("Reverse order:", __spreadArray([], countriesTovVisit, true).reverse());
// Show that the array is still its orginal order 
console.log("Still in orginal order:", countriesTovVisit);
// We have change the orginal array order now 
console.log("orginal array reverse:", countriesTovVisit.reverse());
// Print the array to show that its back to its orginal order 
console.log("back to orginal order:", countriesTovVisit.reverse());
// Print the array to show that its order has been changed in alphabetical order now 
console.log("sorted in alphabetical order:", countriesTovVisit.sort());
// We have change again the orginal array order now in reverse order again 
console.log("orginal array reversed again:", countriesTovVisit.reverse());
