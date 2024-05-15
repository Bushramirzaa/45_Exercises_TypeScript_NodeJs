// Array of current users
var current_users = ["Usman", "ali", "Areeba", "Usama", "Zain"];
// Array of new users
var new_users = ["Humza", "Ayesha", "Ali", "Areeba", "Mahad"];
// loop through new_users check for uesrnames avaibility 
new_users.forEach(function (new_one_user) {
    // Makng a condition for username already exist and save in oue_condition veriable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messege using if-else ststments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is avaliable"));
    }
});
