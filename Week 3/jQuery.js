"use strict";

//#1. Create a paragraph element with some text and append it to the end of the document body using jQuery. (#3 on https://www.w3resource.com/jquery-exercises/1/index.php#EDITOR)

    $("body").append("<p>" + "<span>" + "Words and stuff" + "</span>" + "</p>");

//#2. Using jQuery add the class " w3r_font_color " to the last paragraph element. (#5 on https://www.w3resource.com/jquery-exercises/1/index.php#EDITOR)


    $("button").click(function () {
        $("p:last").addClass("w3r_font_color");
        countElements();
    });

//#3. Using jQuery count every element (including head, body, etc.) in the document. (#17 on https://www.w3resource.com/jquery-exercises/1/index.php#EDITOR)

    function countElements() {
        var theCount = $("*").css("padding", "1px").length;
        console.log("There are " + theCount + " elements");
    }
