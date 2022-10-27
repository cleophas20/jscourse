const rockButton = document.getElementById("Rock")
const paperButton = document.getElementById("Paper")
const scissorsButton = document.getElementById("Scissors")
const endGameButton = document.getElementById("endGameButton")
const computerChoices = ['rock', 'paper', 'scissors']
let score = 0
let handsCount = 0

rockButton.addEventListener("click", rockClick)
paperButton.addEventListener("click", paperClick)
scissorsButton.addEventListener("click", scissorsClick)
endGameButton.addEventListener("click", endGame)

const randomSelect = (myArray) => {
  let computerChoice = Math.floor(Math.random() * (myArray.length))
  return computerChoices[computerChoice]
}

function rockClick() {
  let roundChoice = randomSelect(computerChoices)
  if (roundChoice == 'rock') {
    document.getElementById('result').innerHTML = 'Tie'
  } else if (roundChoice == 'scissors') {
    score++
    document.getElementById('result').innerHTML = 'Win'
  } else if (roundChoice == 'paper') {
    score--
    document.getElementById('result').innerHTML = 'Lose'
  }
  document.getElementById('player-score').innerHTML = score
    document.getElementById('hands').innerHTML = handsCount++
}

function paperClick() {
  let roundChoice = randomSelect(computerChoices)
  if (roundChoice == 'rock') {
    score++
    document.getElementById('result').innerHTML = 'Win'
  } else if (roundChoice == 'scissors') {
    score--
    document.getElementById('result').innerHTML = 'Lose'
  } else if (roundChoice == 'paper') {
    document.getElementById('result').innerHTML = 'Tie'
  }
  document.getElementById('player-score').innerHTML = score
    document.getElementById('hands').innerHTML = handsCount++
}

function scissorsClick() {
  let roundChoice = randomSelect(computerChoices)
  if (roundChoice == 'rock') {
    score--
    document.getElementById('result').innerHTML = 'Lose'
  } else if (roundChoice == 'scissors') {
    document.getElementById('result').innerHTML = 'Tie'
  } else if (roundChoice == 'paper') {
    score++
    document.getElementById('result').innerHTML = 'Win'
  }
  document.getElementById('player-score').innerHTML = score
  document.getElementById('hands').innerHTML = handsCount++
}

function endGame() {
  score = 0
  handsCount = 0
  document.getElementById('player-score').innerHTML = ''
  document.getElementById('result').innerHTML = ''
  document.getElementById('hands').innerHTML = ''
}
