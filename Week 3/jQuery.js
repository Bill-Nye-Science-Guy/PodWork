"use strict";

// Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
//
//     The left frame swaps to the right and takes the image from the frame in the center.
//     The center frame swaps randomly to either the left or right.
//     The right frame swaps to the left and takes the image from the frame in the center.


$("#TheButton").click(function () {
    $("dd").toggleClass("invisible");
});

$("#The2ndButton").click(function () {
    return $("ul").each(function () {
        return $(this).children().last().css("background", "yellow");
    });
});

// BOLDS TEXT WHEN PARENT H3 IS CLICKED
// $("h3").click(function () {
//     return $(this).next().children().css("font-weight", "bold");
// });

$("li").click(function () {
    return $(this).parent().children().first().css("color", "blue");
});


$(".picbutts").click(function () {
    var clickedButton = $(this).attr("id");
    if (clickedButton === "pic1butt"){
        $("#pic1").html($("#pic2").children());
        // $("#pic2").html($("#pic3").children());
        // $("#pic3").html($("#pic1").children());
    }
    if (clickedButton === "pic2butt"){

    }
    if (clickedButton === "pic3butt"){

    }

    // '<img src="images/Jimbo.JPG" alt="Jimbo">'
    // '<img src="images/JokeCat.JPG" alt="Joking Cat">'
    // '<img src="images/WrinkleCat.jpg" alt="Wrinkle Cat">'
});

