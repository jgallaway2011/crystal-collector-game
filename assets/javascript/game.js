// VARIABLES
//========================================================================================================================

// Generate Random Number 
var randomNumber = Math.floor(Math.random() * 102) + 19;

var wins = 0;

var losses = 0;

var userScore = 0;

// FUNCTIONS
//========================================================================================================================

$(document).ready(function(){
    
    // Inserts random number into the div with id randomNumber in the index.html document
    $("#randomNumber").html(randomNumber);

    // Inserts wins into the div with id wins in the index.html document
    $("#wins").html("Wins: " + wins);
   
    // Inserts losses into the div with id wins in the index.html document
    $("#losses").html("Losses: " + losses);      
        
    // Inserts user score into the div with id userScore in the index.html document
    $("#userScore").html(userScore);

    // Creates four buttons for the crystals using a for loop
    for (var i = 0; i < 4; i++) {
        var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;
        var crystalButton = $("<button>");
            crystalButton.attr({
                "class": "crystalButton",
                "id": "crystalButton" + (i + 1),
                "crystalRandomNumber": crystalRandomNumber
            });
        console.log(crystalRandomNumber);
        $(".crystalButtons").append(crystalButton);
    }

    $(".crystalButton").on("click", function() {
        crystalRandomNumber = parseInt($(this).attr("crystalRandomNumber"));
        userScore = userScore + crystalRandomNumber;
        console.log(userScore);
    });

 });

