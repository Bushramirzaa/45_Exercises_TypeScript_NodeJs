// making a function 
function make_shirt (size: string = "Large", printmessage:string = "I Love TypeScript" ){
console.log(`Creating a ${size} shirt with the ${printmessage}prints on shirt`)
}

// calling a function with by-defualt values
make_shirt();

// calling a function now with medium size and defult message
make_shirt("Medium")

// calling a function now with small size and also different print message
make_shirt("small", "I Love JavaScript")