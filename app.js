/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//code 
//variable score, activePlayer, roundscore

var score, activePlayer, roundScore;
var play = true;

//initiate game with basic variable
init ();

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector(".dice") = none;
    document.getElementById("socore-0") = 0;
    document.getElementById("socore-1") = 0;
    document.getElementById("current-0") = 0;
    document.getElementById("current-1") = 0;
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.add("active");
    
}

// Clicking the button to roll the dice
document.querySelector(".btn-roll").addEventListener("click", function(){
    if(play){
        var dice = Math.floor(Math.random() * 6) + 1;

        //display result 
        var domDice = document.querySelector(".dice");
        domDice.style.display = "block";
        domDice.src = 'dice-'+ dice + '.png';

        //update roundScore
        if(dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;

        } else {
            // Next player
            nextPlayer()
        }
    }
})
//click hold 
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
        // Add currentScore to globalScore
        scores[activePlayer] += roundScore;

        // Update globalScore
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= 100){
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer()
        }
    }
})

function nextPlayer() {
    //Next player with ternary operator
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

//click new game
document.querySelector(".btn-new").addEventListener("click", init);

// Clicking for instructions
document.querySelector(".instructions").addEventListener("click", function(){
    document.querySelector(".modal").classList.add("show");
    document.querySelector(".close").addEventListener("click", function(){
        document.querySelector(".modal").classList.remove("show");
});
});