// define a function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
    }
    // function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
       return magicians.map(name => `The Great ${name}`);
}


    // define an array magicians names 
    let magician_names = ["Harry Poter", "Bushra", "Ali"]
    
    // call make_great function to modify magicians nmes 
     let great_magicians = make_great(magician_names);

// show_magicians function that show modifed list of magicians 
show_magicians(great_magicians)