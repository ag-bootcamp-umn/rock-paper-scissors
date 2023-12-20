var wins = 0;
var ties = 0;
var losses = 0;

function playRPS() {
  // Prompt to choose [R, P, S]
  // Store selection in variable
  var choices = ["R", "P", "S"];

  var playerChoice = prompt("Choose 'R', 'P' or 'S'.");
  console.log(playerChoice);

  if (choices.includes(playerChoice)) {
    // Computer select [R, P, S]
    // Store that in variable
    var i = Math.floor(Math.random() * choices.length);

    var computerChoice = choices[i];
    console.log(computerChoice);

    // Compare values
    if (computerChoice === playerChoice) {
      alert("It's a tie!");
      ties ++;
    } else if (
      (playerChoice === "R" && computerChoice === "S") ||
      (playerChoice === "S" && computerChoice === "P") ||
      (playerChoice === "P" && computerChoice === "R")
    ) {
      alert("You win");
      wins ++;
    } else {
      alert("Computer wins");
      losses ++;
    }
  } else {
    alert("You have not chosen wisely.");
  }
  alert(`
    Your total wins are ${wins},
    your total losses are ${losses},
    and your ties are ${ties}.
  `);
  var playAgain = confirm("Would you like to play again?");
  if (playAgain) {
    playRPS();
  } else {
    
    alert("Goodbye.");
  }
}
// Output results
playRPS();
