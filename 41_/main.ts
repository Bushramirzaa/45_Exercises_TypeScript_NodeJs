// define a function to print each magicion name from an array 
function show_magicians(magicians: string[]){
magicians.forEach(name => console.log(name));
}

// define an array containing magicians name 
let magician_names = ["Harry Poter", "Bushra", "Ali"]

// call the function to print all magisian name
show_magicians(magician_names);