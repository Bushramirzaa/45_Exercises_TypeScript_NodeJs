// creating a function
function decribe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling the function 
decribe_city("karachi");
decribe_city("Lahore");
decribe_city("Berlin", "Germany");
