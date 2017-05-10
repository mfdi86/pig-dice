//Back-End Logic:

function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.tallyScore = function() {
    var tally = 0;
  if (this.score !== 1, 0) {
    //add number to "your-score" (with append or +)
  }
}

var playerA = new Player("player A", 0);
var playerB = new Player("player B", 0);

// while neither player's score is above 100pts

// Player A turn
// roll a die
// if (roll === 1 ){
// turn over, no points added, subtract points in tally
// }
// else {
//  add currentRollPoints to currentRoundScore
//
// function Roll ()
//    this.previous
//    this.current
// Roll.prototype.currentScore = function() {
//    return this.score + previous score

  // if user wants to end turn {
  // add currentRoundScore to totalScore
    // }
    // if user continues roll then ... go back to the top
//}
//Front-End Logic:

$(document).ready(function() {
  $("form#rollDice").submit(function(event) {
    event.preventDefault();


  var result = Math.floor(Math.random() * 6 +1);
    console.log(result);
    $("#output").text(result);
    });

  $("form#hold").submit(function(event) {
    event.preventDefault();



//  var result = "0";
//  $("#score").append(result);
  });
});
