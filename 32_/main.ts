// Array of current users
let current_users = ["Usman", "ali", "Areeba", "Usama", "Zain"]

// Array of new users
let new_users = ["Humza", "Ayesha", "Ali", "Areeba", "Mahad"]

// loop through new_users check for uesrnames avaibility 

new_users.forEach(new_one_user => { 

    // Makng a condition for username already exist and save in oue_condition veriable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()   )
    
    // print different messege using if-else ststments
    if (our_condition){
       console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is avaliable`)
    }
} )