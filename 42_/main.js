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
// call make_great function to modify magicians nmes 
var great_magicians = make_great(magician_names);
// show_magicians function that show modifed list of magicians 
show_magicians(great_magicians);
