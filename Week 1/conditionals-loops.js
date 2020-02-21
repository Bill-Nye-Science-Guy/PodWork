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
//Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// Should be one string with a comma in between every "Hello (Name)".
//
// EXAMPLES
// greetPeople(["Joe"]) ➞ "Hello Joe"
//
// greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"
//
// greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"

function greetPeople(names) {
    if (names.length === 0) {
        return "";
    }
    var greeting = "";
    for (var i = 0; i < names.length; i++) {
        greeting = greeting + "Hello " + names[i] + ", ";
    }
    return greeting.slice(0, -2);
}
