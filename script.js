const currentTurnText = document.getElementById("currentTurnText")
const resultText = document.getElementById("resultText")
const gridCells = document.querySelectorAll(".cell")
const restartButton = document.getElementById("restart")
const gameContainer = document.getElementById("gameContainer")

const playerO = "O"
const playerX = "X"
let currentTurn = playerO
let turnCount = 0

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const switchPlayer = () => {
  currentTurn = currentTurn === playerO ? playerX : playerO
  currentTurnText.innerHTML = currentTurn
}

const endGame = () => {
    gameContainer.removeEventListener('click', handleClickedCell)
}

const checkWinningCombos = () =>{
  for (i = 0; i < winningCombos.length; i++) {
    const x = winningCombos[i][0]
    const y = winningCombos[i][1]
    const z = winningCombos[i][2]
    const compareWin = new Set([gridCells[x].innerHTML, gridCells[y].innerHTML, gridCells[z].innerHTML])
    if (compareWin.size === 1 && gridCells[x].innerHTML !== "") {
     return `The winner is player ${gridCells[x].innerHTML}!`
    }    
  } 
  return ""
}


  const handleClickedCell = (event) => {
  const clickedCell = parseInt(event.target.getAttribute("id"));
  if (!gridCells[clickedCell].innerHTML) {
    turnCount++
    gridCells[clickedCell].innerHTML = currentTurn
    const winner = checkWinningCombos()
    if (winner !== "") {
      resultText.innerHTML = winner
      endGame()
    } 
    else if (turnCount === 9) {
      resultText.innerHTML = "It's a draw!"
    }
    else {
      switchPlayer() 
    }
  }
}   

gameContainer.addEventListener("click", handleClickedCell)

restartButton.addEventListener('click', function() {
    gameContainer.addEventListener("click", handleClickedCell)
    let currentTurn = playerO
    let turnCount = 0
    currentTurnText.innerHTML = currentTurn
    resultText.innerHTML = "&hearts;&hearts;&hearts;"
    for (i = 0; i < gridCells.length; i++) {
      gridCells[i].innerHTML = ""
    }
  })