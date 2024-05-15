var userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    // using foreach on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a ststus report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for loging in again."));
        }
    });
}
