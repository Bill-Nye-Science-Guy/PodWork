// Problem 1.
// Create a function that takes an array of numbers and strings and return a new array with the strings.
//
//--------------------------------------------------------------
var wordsAndNumbers = [1, 'hello', 3, 'goodbye', 5];
function removeStrings() {
    return wordsAndNumbers.filter(isNaN);
}
removeStrings();

// var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
// var planetsArray = planetsString.split("|");

// Problem 2.
// Create a function that takes a string and returns the number (count) of vowels contained within it.
//
// EXAMPLES
// countVowels("Celebration") ➞ 5
//
// countVowels("Palm") ➞ 1
//
// countVowels("Prediction") ➞ 4
//--------------------------------------------------------------

function getVowels(x) {
    var vowelsCount = 0;
    var string = x.toString();
    for (var i = 0; i <= string.length; i++) {
        if(string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return  vowelsCount;
}
// Problem 3.
// write a function named remove3s that accepts and array of numbers and returns an array with all of the same numbers except for 3

function remove3s(arr) {
    var bucket = [];
    arr.forEach(function (num) {
        if (num !==3) {
            bucket.push(num);
        }
    })
    return bucket
}
// check
console.log(remove3s([1, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7]));
