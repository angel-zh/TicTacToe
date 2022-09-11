const currentPlayerText = document.getElementById("currentPlayerText");
const winnerText = document.getElementById("winnerText");
const gridCells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart");
const gameContainer = document.getElementById("gameContainer");

const playerO = "O";
const playerX = "X";
let currentPlayer 

const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const getClickedCell = (event) => {
  const clickedCell = event.target.getAttribute("id");
  //console.log(clickedCell);
};

gameContainer.addEventListener("click", getClickedCell);



const checkForWinner = () => {
  if (currentPlayer === gridCells[0]) {
    if (currentPlayer === gridCells[1] && currentPlayer === gridCells[2]) {
      winnerText.innerHTML = `${currentPlayer} won!`;
      return true;
    } else if (
      currentPlayer === gridCells[3] &&
      currentPlayer === gridCells[6]
    ) {
      winnerText.innerHTML = `${currentPlayer} won!`;
      return true;
    } else if (
      currentPlayer === gridCells[4] &&
      currentPlayer === gridCells[8]
    ) {
      winnerText.innerHTML = `${currentPlayer} won!`;
      return true;
    }
  } else if (
    currentPlayer === gridCells[3] &&
    currentPlayer === gridCells[4] &&
    currentPlayer === gridCells[5]
  ) {
    winnerText.innerHTML = `${currentPlayer} won!`;
    return true;
  } else if (
    currentPlayer === gridCells[6] &&
    currentPlayer === gridCells[7] &&
    currentPlayer === gridCells[8]
  ) {
    winnerText.innerHTML = `${currentPlayer} won!`;
    return true;
  } else if (
    currentPlayer === gridCells[1] &&
    currentPlayer === gridCells[4] &&
    currentPlayer === gridCells[7]
  ) {
    winnerText.innerHTML = `${currentPlayer} won!`;
    return true;
  } else if (currentPlayer === gridCells[2]) {
    if (currentPlayer === gridCells[5] && currentPlayer === gridCells[8]) {
      winnerText.innerHTML = `${currentPlayer} won!`;
      return true;
    } else if (
      currentPlayer === gridCells[4] &&
      currentPlayer === gridCells[6]
    ) {
      winnerText.innerHTML = `${currentPlayer} won!`;
      return true;
    }
  }
};

const initializeGame = () => {
  checkForWinner();
};

