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
            
    // Creates four buttons for the crystals using a for loop
    for (var i = 0; i < 4; i++) {
        var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;
        var crystalButton = $("<button>");
            crystalButton.attr({
                "class": "crystalButton",
                "id": "crystalButton" + (i + 1),
                "crystalRandomNumber": crystalRandomNumber
            });
        $(".crystalButtons").append(crystalButton);
    }

    $(".crystalButton").on("click", function() {
        crystalRandomNumber = parseInt($(this).attr("crystalRandomNumber"));
        userScore = userScore + crystalRandomNumber;
        $("#userScore").html(userScore);

        if (userScore > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            userScore = 0;
            $("#userScore").html(userScore);
            randomNumber = Math.floor(Math.random() * 102) + 19;
            $("#randomNumber").html(randomNumber);

        } else if (userScore === randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            userScore = 0;
            $("#userScore").html(userScore);
            randomNumber = Math.floor(Math.random() * 102) + 19;
            $("#randomNumber").html(randomNumber);
        } else {
            // Keep collecting (clicking) those crystals!
        }
    });
 });

