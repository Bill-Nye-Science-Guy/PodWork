//TODO: PROBLEM 1 --> https://edabit.com/challenge/4gzDuDkompAqujpRi

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function ProblemOne(x) {
    var answer = 0;
    for (var y = 1; y <= x; y+=1) {
        console.log(answer += y);
    }
    return answer;
}


// console.log(ProblemOne(5)); //Should be: 15
// console.log(ProblemOne(3)); //Should be: 6
console.log(ProblemOne(-3)); //Should be: -6



//TODO: PROBLEM 2 --> https://edabit.com/challenge/XnZAcvr4tCD9ppyrN

// Given a number, return a string of the word "Boom", which varies in the following ways:
//     The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
//     If n is evenly divisible by 5, return the string in ALL CAPS.
//     If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
//Examples:
// boomIntensity(4) ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
//
// boomIntensity(1) ➞ "boom"
// // 1 is lower than 2, so we return "boom"
//
// boomIntensity(5) ➞ "BOOOOOM"
// // There are 5 "o"s and 5 is divisible by 5 (all caps)
//
// boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// // There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)






//TODO: PROBLEM 3 --> https://edabit.com/challenge/S7oxczk4Rtu99kaZ8

// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
//
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
//
// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.
//     Examples
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
//
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
//
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]