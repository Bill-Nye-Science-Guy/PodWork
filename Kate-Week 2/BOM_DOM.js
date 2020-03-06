"use strict";

// All 3 problems from:
// https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

// 1. Modify the style of the paragraph text through javascript code so that when you click on the button the font, font size, and color of the paragraph text should change.

    function js_style() {
        var hitDaButton = document.getElementById("text");
        hitDaButton.style.color = "red";
        hitDaButton.style.fontFamily = "Arial";
        hitDaButton.style.fontSize = "20px";
    }

//2. Write a JavaScript function to get the values of First and Last name of the following form.

    var names = document.getElementById("form1");

    function func2(x) {
            for (var i = 0; i < x.length; ++i) {
                if (x.elements[i].name === "fname" || x.elements[i].name === "lname") {
                    console.log(x.elements[i].value);
                }
            }
        }

    func2(names);


// 3. Write a JavaScript program to set the background color of a paragraph.

    var prob3p = document.getElementById("prob3p");

    function makeItPurple (x){
        x.style["background-color"] = "rebeccapurple";
    }

    makeItPurple(prob3p);



