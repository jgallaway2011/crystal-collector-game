// VARIABLES (GLOBAL)
//========================================================================================================================

// Generate Random Number between 19 and 120
var randomNumber = Math.floor(Math.random() * 102) + 19;

// Intialize Wins at Zero
var wins = 0;

// Intialize Losses at Zero
var losses = 0;

// Intialize user score at Zero
var userScore = 0;

// MAIN PROCESS
//========================================================================================================================

// Ensure that none of the Javascript will run until the HTML and CSS documents have loaded
$(document).ready(function(){
    
    // Inserts random number into the div with id randomNumber in the index.html document
    $("#randomNumber").html(randomNumber);
            
    // Creates four buttons for the crystals using a for loop
    for (var i = 0; i < 4; i++) {
        // Creates a random number for each of the four crystals between 1 and 12
        var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;
        // Assign new button element to variable crystalButton
        var crystalButton = $("<button>");
            // Assign class, id, and value to each crystalButton
            crystalButton.attr({
                "class": "crystalButton",
                "id": "crystalButton" + (i + 1),
                "crystalRandomNumber": crystalRandomNumber
            });
        // Add crysyalButton to the crystalButtons div in the index.html docuement
        $(".crystalButtons").append(crystalButton);
    }

    // Below code will click anytime any of the four crystals are clicked on
    $(".crystalButton").on("click", function() {
        // Remove loss div if user lost on last turn
        $("#loss").remove();
        // Remove win div if user lost on last turn
        $("#win").remove();
        // Assign the value of each crystal to variable crystalRandomNumber when clicked
        crystalRandomNumber = parseInt($(this).attr("crystalRandomNumber"));
        // Add value CrystalRandomNumber clicked to userscore once clicked
        userScore = userScore + crystalRandomNumber;
        // Add userScore to the userScore div in the index.html document
        $("#userScore").html(userScore);

        // Run this code if userScore is greater than the randomNumber
        if (userScore > randomNumber) {
            // Display "YOU LOST!" in index.html if user went over the randomNumber
            $("#winsAndLosses").prepend("<div id=loss>YOU LOST!</div>");
            // Add one loss
            losses++;
            // Display the new loss count in the index.html document
            $("#losses").html("Losses: " + losses);
            // Reset userScore to zero for new round of game
            userScore = 0;
            // Display userScore in index.html as zero
            $("#userScore").html(userScore);
            // Select a new randomNumber for the next round of the game between 19 and 120
            randomNumber = Math.floor(Math.random() * 102) + 19;
            // Display new randomNumber in index.html document
            $("#randomNumber").html(randomNumber);

        // Run this code if userScore is equal to the randomNumber
        } else if (userScore === randomNumber) {
            // Display "YOU WON!" in index.html if user went over the randomNumber
            $("#winsAndLosses").prepend("<div id=win>YOU WON!</div>");
            // Add one win
            wins++;
            // Display the new win count in the index.html document
            $("#wins").html("Wins: " + wins);
            // Reset userScore to zero for new round of game
            userScore = 0;
            // Display userScore in index.html as zero
            $("#userScore").html(userScore);
            // Select a new randomNumber for the next round of the game between 19 and 120
            randomNumber = Math.floor(Math.random() * 102) + 19;
            // Display new randomNumber in index.html document
            $("#randomNumber").html(randomNumber);
        }
    });
 });

