//Back-End Logic:

function Player(name, score, totalScore) {
  this.name = name;
  this.score = 0;
  this.totalScore = 0;
}

Player.prototype.tallyScore = function(player1) {
  var tally = ((Math.floor(Math.random() * 6) +1));
  console.log("TALLY = " + tally);
  if (tally !== 1) {
    player1.score += tally;
  }
  else {
   tally = 0
  }

  console.log("Tally number 2 = " + tally);
  return player1;
  // add rolled number to "your-score", turn continues
  }
//     //turn is over, score tally = 0
//   }
// }


// while neither player's score is above 100pts
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
  var player1 = new Player("player1", 0, 0);
  var player2 = new Player("player2", 0, 0);


  $("form#rollDice1").submit(function(event){
    event.preventDefault();

    player1 = player1.tallyScore(player1);
    // console.log(tallyScore);

    // var result1 = Math.floor(Math.random() * 6 +1);
    console.log(player1.score);
    $("#output1").text(player1.score);

    $("#hold1").click(function(player1){
      player1.totalScore = player1.totalScore + player1.score;
      console.log(player1.score);
      console.log(player1.totalScore);
      player1.score = 0;
      return player1;
    });
  });
});

//   $("form#hold1").submit(function(event) {
//
// //----------------------------------------------------
//
//   $("form#rollDice2").submit(function(event) {
//
//
//   var result2 = Math.floor(Math.random() * 6 +1);
//     console.log(result2);
//     $("#output2").text(result2);
//     });
//
//   $("form#hold2").submit(function(event) {
//
//
// //  var result = "0";
// //  $("#score").append(result);  });
// });
// });
