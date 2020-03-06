// LOOPS, ARRAYS, Math


// 1. Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
        var vowels = ['a','e','i','o','u','A','E','I','O','U'];
        for (var i = 0; i < str.length; i++) {
            var x = str.charAt(i)
            if (vowels.includes(x)) {
                // returns where its indexed at.
                return i;
            }
        }
}

// 2. Create a function that takes an array of names and returns an array with only the first letter capitalized.

function capitalizeNames(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().substring(1);
        // capital letter concatinates ----> to rest of word .substring(1) returns rest of word
    }
    return arr;
}

// 3. create a function that takes an array strings and returns a random string.

function randomNames(names) {
    var namesLength = names.length;
    var random = Math.floor(Math.random() * namesLength);
    return names[random];
}
var names = ["ben", "marie", "kal", "lana", "chris"];

