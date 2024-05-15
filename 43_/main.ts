// define a function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
    }

    // function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
       return magicians.map(name => `The Great ${name}`);
}


    // define an array magicians names 
    let magician_names = ["Harry Poter", "Bushra", "Ali"];
    
   // making a copy of orignal array through .slice() function
let copy_magicians_names = magician_names.slice()


// modify the copied array to include "The Great" with thier names
 let copy_great_magicians = make_great(copy_magicians_names);

// show both arrays orignal and copied 

// orignal
console.log("orignal array\n")
show_magicians(magician_names);

//copied
console.log("copied array\n")
show_magicians(copy_great_magicians);








