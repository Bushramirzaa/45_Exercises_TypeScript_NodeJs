// define a function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array magicians names 
var magician_names = ["Harry Poter", "Bushra", "Ali"];
// making a copy of orignal array through .slice() function
var copy_magicians_names = magician_names.slice();
// modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magicians_names);
// show both arrays orignal and copied 
// orignal
console.log("orignal array\n");
show_magicians(magician_names);
//copied
console.log("copied array\n");
show_magicians(copy_great_magicians);
