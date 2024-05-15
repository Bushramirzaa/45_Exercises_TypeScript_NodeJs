// creating a array
var userName = ["mahad", "ali", "zeeshan", "admin", "usman"];
// using foreach on array
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a ststus report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for loging in again."));
    }
});
