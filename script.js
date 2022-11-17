function getComputerChoice(){
  const plays = ['rock', 'paper', 'scissors']

  const randomPlay = plays.sort(() => Math.random() - .5)
  const computerChoice = String(randomPlay[0]);

  return computerChoice;
}

function playRound(playerSelection, computerSelection){
  player = playerSelection.toLowerCase()
  computer = computerSelection.toLowerCase()
  result = 'This game was intense';
  switch (true){
    case player === 'rock' && computer === 'paper':
      result = 'You lose! Rock loses Paper';
      return result;
    case player === 'paper' && computer === 'rock':
      result = 'You win! Paper beats Rock';
      return result;
    case player === 'scissors' && computer === 'paper':
      result = 'You win! Scissors beat Paper'
      return result;
    case player === 'paper' && computer === 'scissors':
      result = 'You lose! Paper loses scissors';
      return result;
    case player === computer:
      result = "We tied! Let's go again";
      return result;
    default:
      return result;
  }
}

const computerSelection = getComputerChoice();
for (let i = 0; i < 5; i++) {
console.log(playRound(prompt('Rock, Paper or Scissors'), computerSelection));
}