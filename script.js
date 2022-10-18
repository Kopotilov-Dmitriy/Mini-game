window.onload = function() {
    var planePosition = document
     .querySelector("#plane");
    planePosition.style.left = "135px";
   }
   
   var ballPosition = -120;
   var ballTop = -37;
   
   function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (
     max - min)) + min;
   }
   
   setInterval(function() {
    var ballP = ++ballPosition;
    var ballM = ++ballTop;
    var ballMove = document
     .querySelector("#ball_1");
    var ballRandom = document
     .querySelector("#ball_1");
    if (ballP === 120) {
     ballPosition = -120;
     ballTop = -37;
     ballMove.style.top = "83px";
     ballRandom.style.left = getRandom(
      30, 248) + "px";
    }
    if (ballP === 0) {
     ballP = --ballPosition;
     ballMove.style.top = ballM + "px";
    }
    if (ballM === 420) {
     ballP = ++ballPosition;
    }
    var ballStart = document
     .querySelector("#ball_1");
    ballStart.style.objectPosition =
     "0 " + ballP + "px";
   }, 20);
   
   
   
   var bgPosition = 100;
   
   setInterval(function() {
    var bgP = --bgPosition;
    if (bgP === 27) {
     bgPosition = 100;
    }
    var bgMoving = document
     .querySelector("#bg");
    bgMoving.style.objectPosition =
     "0 " + bgP + "%";
   }, 60);
   
   
   var distance = 0;
   
   setInterval(function() {
    var gMil = ++distance;
    var getMiles = document
     .querySelector("#miles");
    getMiles.innerHTML = gMil;
   }, 100);
   
   function moveLeft() {
    planePosition = document
     .querySelector("#plane");
    if (planePosition.style.left ===
     "253px") {
     planePosition.style.left = "195px";
    } else if (planePosition.style
     .left === "195px") {
     planePosition.style.left = "135px";
    } else if (planePosition.style
     .left === "135px") {
     planePosition.style.left = "75px";
    } else {
     planePosition.style.left = "13px";
    }
   }
   
   function moveRight() {
    planePosition = document
     .querySelector("#plane");
    if (planePosition.style.left ===
     "13px") {
     planePosition.style.left = "75px";
    } else if (planePosition.style
     .left === "75px") {
     planePosition.style.left = "135px";
    } else if (planePosition.style
     .left === "135px") {
     planePosition.style.left = "195px";
    } else {
     planePosition.style.left = "253px";
    }
   }   