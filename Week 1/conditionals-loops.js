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

    //turn the input into a string
    var string = x.toString();

    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {

        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}


// Problem 3.
// Imagine a school that kids attend for 6 years.
// In each year, there are five groups started,
// marked with the letters a, b, c, d, e.
// For the first year, the groups are 1a, 1b, 1c, 1d, 1e
// and for the last year, the groups are 6a, 6b, 6c, 6d, 6e.
//
// Write a function that returns the groups in the school by year (as a string),
// separated with a comma and a space in the form of "1a, 1b, 1c, 1d, 1e, 2a, 2b (....) 5d, 5e, 6a, 6b, 6c, 6d, 6e".
//
// EXAMPLES
// printAllGroups() ➞ "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e "


