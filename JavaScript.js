var ele,sun, red, blue, green, boat, moveBtn, redOnBoat, blueOnBoat, greenOnBoat, redOnRight, blueOnRight, greenOnRight, redOnLeft, greenOnLeft, blueOnLeft, boatOnRight;

window.onload = function () {
    ele = null; boatOnRight = false;
    redOnBoat = false; redOnRight = false; redOnLeft = true;
    greenOnBoat = false; greenOnRight = false; greenOnLeft = true;
    blueOnBoat = false; blueOnRight = false; blueOnLeft = true;
    boat = document.getElementById("boat");
    stick = document.getElementById("stick");
    stick1 = document.getElementById("stick1");
    moveBtn = document.getElementById('moveBtn');
    stick.style.visibility = "hidden";
    sun = document.getElementById("sun");
}

//red
function jumpRed() {
    red = document.getElementById('1');
    if (redOnBoat) {
        if (boatOnRight) {
            red.classList.remove("move-red-right");
            red.classList.remove("red-jump-left");
            red.classList.remove("move-red-left");
            red.classList.remove("red-jump-from-right-to-boat");
            red.classList.add("red-jump-from-boat-right");
            redOnLeft = false;
            redOnBoat = false;
            redOnRight = true;
            ele = "";
        }
        else {
            red.classList.remove("move-red-left");
            red.classList.remove("move-red-right");
            red.classList.remove("red-jump-from-boat-right");
            red.classList.remove("red-jump-from-right-to-boat");
            red.classList.add("red-jump-left");
            redOnLeft = true;
            redOnBoat = false;
            redOnRight = false;
            ele = "";
        }
    }
    else if (redOnRight) {
        red.classList.remove("red-jump-left");
        red.classList.remove("red-jump-from-boat-right");
        red.classList.remove("move-red-left");
        red.classList.remove("move-red-right");
        red.classList.add("red-jump-from-right-to-boat");
        redOnLeft = false;
        redOnRight = false;
        redOnBoat = true;
        ele = red;
    }
    else {
        if (redOnLeft) {
            red.classList.remove("red-jump-left");
            red.classList.remove("red-jump-from-boat-right");
            red.classList.remove("move-red-left");
            red.classList.remove("move-red-right");
            red.classList.add("red-jump-right");
            ele = red;
            redOnLeft = false;
            redOnBoat = true;
            redOnRight = false;
        }
        else {
            red.classList.remove("red-jump-right");
            red.classList.remove("move-red-left");
            red.classList.remove("move-red-right");
            red.classList.remove("red-jump-from-boat-right");
            red.classList.add("red-jump-left");
            ele = "";
            redOnLeft = true;
            redOnBoat = false;
            redOnRight = false;
        }
    }
}//end of red



//blue
function jumpBlue() {
    blue = document.getElementById('2');
    if (blueOnBoat) {
        if (boatOnRight) {
            blue.classList.remove("move-blue-right");
            blue.classList.remove("blue-jump-left");
            blue.classList.remove("move-blue-left");
            blue.classList.remove("blue-jump-from-right-to-boat");
            blue.classList.add("blue-jump-from-boat-right");
            blueOnLeft = false;
            blueOnBoat = false;
            blueOnRight = true;
            ele = "";
        }
        else {
            blue.classList.remove("move-blue-left");
            blue.classList.remove("move-blue-right");
            blue.classList.remove("blue-jump-from-boat-right");
            blue.classList.remove("blue-jump-from-right-to-boat");
            blue.classList.add("blue-jump-left");
            blueOnLeft = true;
            blueOnBoat = false;
            blueOnRight = false;
            ele = "";
        }
    }
    else if (blueOnRight) {
        blue.classList.remove("blue-jump-left");
        blue.classList.remove("blue-jump-from-boat-right");
        blue.classList.remove("move-blue-left");
        blue.classList.remove("move-blue-right");
        blue.classList.add("blue-jump-from-right-to-boat");
        blueOnLeft = false;
        blueOnRight = false;
        blueOnBoat = true;
        ele = blue;
    }
    else {
        if (blueOnLeft) {
            blue.classList.remove("blue-jump-left");
            blue.classList.remove("blue-jump-from-boat-right");
            blue.classList.remove("move-blue-left");
            blue.classList.remove("move-blue-right");
            blue.classList.add("blue-jump-right");
            ele = blue;
            blueOnLeft = false;
            blueOnBoat = true;
            blueOnRight = false;
        }
        else {
            blue.classList.remove("blue-jump-right");
            blue.classList.remove("move-blue-left");
            blue.classList.remove("move-blue-right");
            blue.classList.remove("blue-jump-from-boat-right");
            blue.classList.add("blue-jump-left");
            ele = "";
            blueOnLeft = true;
            blueOnBoat = false;
            blueOnRight = false;
        }
    }
}//end of blue

//green
function jumpGreen() {
    green = document.getElementById('3');
    if (greenOnBoat) {
        if (boatOnRight) {
            green.classList.remove("move-green-right");
            green.classList.remove("green-jump-left");
            green.classList.remove("move-green-left");
            green.classList.remove("green-jump-from-right-to-boat");
            green.classList.add("green-jump-from-boat-right");
            greenOnLeft = false;
            greenOnBoat = false;
            greenOnRight = true;
            ele = "";
        }
        else {
            green.classList.remove("move-green-left");
            green.classList.remove("move-green-right");
            green.classList.remove("green-jump-from-boat-right");
            green.classList.remove("green-jump-from-right-to-boat");
            green.classList.add("green-jump-left");
            greenOnLeft = true;
            greenOnBoat = false;
            greenOnRight = false;
            ele = "";
        }
    }
    else if (greenOnRight) {
        green.classList.remove("green-jump-left");
        green.classList.remove("green-jump-from-boat-right");
        green.classList.remove("move-green-left");
        green.classList.remove("move-green-right");
        green.classList.add("green-jump-from-right-to-boat");
        greenOnLeft = false;
        greenOnRight = false;
        greenOnBoat = true;
        ele = green;
    }
    else {
        if (greenOnLeft) {
            green.classList.remove("green-jump-left");
            green.classList.remove("green-jump-from-boat-right");
            green.classList.remove("move-green-left");
            green.classList.remove("move-green-right");
            green.classList.add("green-jump-right");
            ele = green;
            greenOnLeft = false;
            greenOnBoat = true;
            greenOnRight = false;
        }
        else {
            green.classList.remove("green-jump-right");
            green.classList.remove("move-green-left");
            green.classList.remove("move-green-right");
            green.classList.remove("green-jump-from-boat-right");
            green.classList.add("green-jump-left");
            ele = "";
            greenOnLeft = true;
            greenOnBoat = false;
            greenOnRight = false;
        }
    }
}//end of green


function moveBoat() {
    if (!boat.classList.contains("move-boat-right")) {
        boat.classList.remove("move-boat-left");
        boat.classList.add("move-boat-right");
        stick1.style.visibility = "visible";
        stick1.classList.add("stick-move-right");
        stick.classList.remove("stick-move-left");
        stick.style.visibility = "hidden";
        boatOnRight = true;
        if (ele.id == 1) {
            if (redOnBoat) {
                ele.classList.remove("move-red-left");
                ele.classList.remove("red-jump-from-boat-right");
                ele.classList.remove("red-jump-from-right-to-boat");
                ele.classList.add("move-red-right");
            }
        }
        else if (ele.id == 2) {
            if (blueOnBoat) {
                ele.classList.remove("move-blue-left");
                ele.classList.remove("blue-jump-from-boat-right");
                ele.classList.remove("blue-jump-from-right-to-boat");
                ele.classList.add("move-blue-right");
            }
        }
        else if (ele.id == 3) {
            if (greenOnBoat) {
                ele.classList.remove("move-green-left");
                ele.classList.remove("green-jump-from-boat-right");
                ele.classList.remove("green-jump-from-right-to-boat");
                ele.classList.add("move-green-right");
            }
        }
    }
    else {
        boat.classList.remove("move-boat-right");
        boat.classList.add("move-boat-left");
        stick.style.visibility = "visible";
        stick.classList.add("stick-move-left");
        stick1.classList.remove("stick-move-right");
        stick1.style.visibility = "hidden";
        boatOnRight = false;
        if (ele.id == 1) {
            if (redOnBoat) {
                ele.classList.remove("move-red-right");
                ele.classList.remove("red-jump-from-boat-right");
                ele.classList.remove("red-jump-from-right-to-boat");
                ele.classList.add("move-red-left");
            }
        }
        else if (ele.id == 2) {
            if (blueOnBoat) {
                ele.classList.remove("move-blue-right");
                ele.classList.remove("blue-jump-from-boat-right");
                ele.classList.remove("blue-jump-from-right-to-boat");
                ele.classList.add("move-blue-left");
            }
        }
        else if (ele.id == 3) {
            if (greenOnBoat) {
                ele.classList.remove("move-green-right");
                ele.classList.remove("green-jump-from-boat-right");
                ele.classList.remove("green-jump-from-right-to-boat");
                ele.classList.add("move-green-left");
            }
        }
    }

    checkGame();
}

function checkGame() {
    if ((redOnLeft && blueOnLeft && !greenOnLeft) || (!redOnLeft && blueOnLeft && greenOnLeft) || (redOnRight && blueOnRight && !greenOnRight) || (!redOnRight && blueOnRight && greenOnRight)) {
        alert("Game Over");
    }
    else if (redOnRight && blueOnRight && greenOnRight) {
        var snd = new Audio("sounds/clap2.mp3"); // buffers automatically when created
        snd.play();
        sun.classList.add("sun-move");
    }
}