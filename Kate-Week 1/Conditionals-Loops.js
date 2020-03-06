//TODO: PROBLEM 1 --> https://edabit.com/challenge/4gzDuDkompAqujpRi

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function ProblemOne(x) {
    var answer = 0;
    var returnThis;
    // For positives...
    if (x < 0) {
        x = (x * -1);
        for (var y = 1; y <= x; y+=1) {
            answer += y;
        }
        returnThis = (answer * -1);
    }
    // And for negatives...
    else {
        for (var y = 1; y <= x; y+=1) {
            answer += y;
        }
        returnThis = answer;
    }
    return returnThis;
}

// console.log(ProblemOne(5)); //Should be: 15
// console.log(ProblemOne(3)); //Should be: 6
// console.log(ProblemOne(-3)); //Should be: -6
// console.log(ProblemOne(-5)); //Should be: -15



//TODO: PROBLEM 2 --> https://edabit.com/challenge/XnZAcvr4tCD9ppyrN

// Given a number, return a string of the word "Boom", which varies in the following ways:
//     The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
//     If n is evenly divisible by 5, return the string in ALL CAPS.
//     If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

function DaBoom(x) {
    var Boom;
    if (x > 2) {
        if (x % 10 === 0) {
            Boom = ("B" + "o".repeat(x) + "m" + "!").toUpperCase();
        }
        else if (x % 2 === 0) {
            Boom = ("B" + "o".repeat(x) + "m" + "!");
        }
        else if (x % 5 === 0) {
            Boom = ("B" + "o".repeat(x) + "m").toUpperCase();
        }
        else {
            Boom = "B" + "o".repeat(x) + "m"
        }
    }
    else{
        Boom = "Boom";
    }
    return Boom;
}

// console.log(DaBoom(1));
// console.log(DaBoom(3));
// console.log(DaBoom(4));
// console.log(DaBoom(5));
// console.log(DaBoom(10));


//TODO: PROBLEM 3 --> https://edabit.com/challenge/S7oxczk4Rtu99kaZ8

// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound.
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
    // If win equals true, end the list with Pong!.
    // If win equals false, end with Ping! instead.

firstArray = ["Ping!"];
secondArray = ["Ping!", "Ping!"];
thirdArray = ["Ping!", "Ping!", "Ping!"];

// y = true means Pong wins, y = false means Ping wins

function PingPong(x, y) {
   var Result;
    if (y === true) {
        x = (x.join(",Pong!,").split(","));
        x.push("Pong!");
        Result = x;
    }
    else {
        x = (x.join(",Pong!,").split(","));
        Result = x;
    }
  return Result;
}

// console.log(PingPong(firstArray, true));
// console.log(PingPong(firstArray, false));
// console.log(PingPong(secondArray, true));
// console.log(PingPong(secondArray, false));
// console.log(PingPong(thirdArray, true));
// console.log(PingPong(thirdArray, false));