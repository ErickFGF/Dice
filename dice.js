var dice1 = document.getElementById("img1");
var dice2 = document.getElementById("img2");

var dice = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");

function rollDice(){
    var randomNum = Math.floor(Math.random() * dice.length);
     document.getElementById("img1") = dice[randomNum];
     document.getElementById("img2") = dice[randomNum];
}