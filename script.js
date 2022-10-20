function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const computerChoice = choices[Math.floor(Math.random() * 3)]
  return computerChoice
}
getComputerChoice()

function getResult(playerChoice, computerChoice) {
  if (computerChoice == playerChoice) {
    score = 0
  } else if (computerChoice == 'Rock' && playerChoice == 'Paper' || computerChoice == 'Paper' && playerChoice == 'Scissors' || computerChoice == 'Scissors' && playerChoice == 'Rock') {
    score = 1
  } else {
    score = -1
  }
  return score
}

function showResult(score, playerChoice, computerChoice) {
  const playerScore = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  handsDiv.innerText = ('👨‍🦱 ' + playerChoice + ' VS ' + '🤖 ' + computerChoice)
  const resultDiv = document.getElementById('result')
  if (score == 0) {
    resultDiv.innerText = 'Its a Draw!'
  } else if (score == 1) {
    resultDiv.innerText = 'You Win!'
  } else {
    resultDiv.innerText = 'You Lose!'
  }
  final = score + final
  playerScore.innerText = final
}
let final = 0
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  const buttons = document.querySelectorAll('.rpsButton')
  buttons.forEach(button => {
    button.onclick = () => onClickRPS(button.value)
  })
}

function endGame() {
  const end = document.getElementById('endGameButton')
  const playerScore = document.getElementById('player-score')
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  end.onclick = () => {
    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScore.innerText = ''
    final = 0
  }
}
endGame()
playGame()