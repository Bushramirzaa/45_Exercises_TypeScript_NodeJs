// define a function to print each magicion name from an array 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name 
var magician_names = ["Harry Poter", "Bushra", "Ali"];
// call the function to print all magisian name
show_magicians(magician_names);
