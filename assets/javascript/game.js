$(document).ready(function(){

// VARIABLES
//========================================================================================================================

var randomNumber = Math.floor(Math.random() * 102) + 19;

var wins = 0;

var losses = 0;

var userScore = 0;

var blueCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;

var yellowCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;

var greenCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;

var redCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;

// FUNCTIONS
//========================================================================================================================

    $("#blueCrystal").click(function() {
        userScore = userScore + blueCrystalRandomNumber;
    });

    $("#yellowCrystal").click(function() {
        userScore = userScore + yellowCrystalRandomNumber;
    });

    $("#greenCrystal").click(function() {
        userScore = userScore + greenCrystalRandomNumber;
    });

    $("#redCrystal").click(function() {
        userScore = userScore + redCrystalRandomNumber;
    });

 });

