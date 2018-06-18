// VARIABLES
//========================================================================================================================

// Generate Random Number 
var randomNumber = Math.floor(Math.random() * 102) + 19;

var wins = 0;

var losses = 0;

var userScore = 0;

var blueCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
console.log(blueCrystalRandomNumber);

var yellowCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
console.log(yellowCrystalRandomNumber);

var greenCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
console.log(greenCrystalRandomNumber);

var redCrystalRandomNumber = Math.floor(Math.random() * 12) + 1;
console.log(redCrystalRandomNumber);

// FUNCTIONS
//========================================================================================================================

$(document).ready(function(){
    
        // Inserts random number into the div with id randomNumber in HTML document
        $("#randomNumber").html(randomNumber);
        
        // Inserts user score into the div with id userScore in the HTML document
        $("#userScore").html(userScore);
        
        // Inserts user score into the div with id userScore in the HTML documen
        $("#blueCrystal").click(function() {
            userScore = userScore + blueCrystalRandomNumber;
            $("#userScore").html(userScore);
            console.log(userScore);
        });
        
        $("#yellowCrystal").click(function() {
            userScore = userScore + yellowCrystalRandomNumber;
            $("#userScore").html(userScore);
            console.log(userScore);
        });
        
        $("#greenCrystal").click(function() {
            userScore = userScore + greenCrystalRandomNumber;
            $("#userScore").html(userScore);
            console.log(userScore);
        });
        
        $("#redCrystal").click(function() {
            userScore = userScore + redCrystalRandomNumber;
            $("#userScore").html(userScore);
            console.log(userScore);
        });


 });

