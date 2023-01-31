const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let moves = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (event) {
    if (event.target.innerHTML === "") {
      event.target.innerHTML = currentPlayer;
      moves++;
      checkWinningScenario();
      checkDrawScenario();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}

function checkWinningScenario() {
  if (
    (cells[0].innerHTML === cells[1].innerHTML &&
      cells[1].innerHTML === cells[2].innerHTML &&
      cells[0].innerHTML !== "") ||
    (cells[3].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[5].innerHTML &&
      cells[3].innerHTML !== "") ||
    (cells[6].innerHTML === cells[7].innerHTML &&
      cells[7].innerHTML === cells[8].innerHTML &&
      cells[6].innerHTML !== "") ||
    (cells[0].innerHTML === cells[3].innerHTML &&
      cells[3].innerHTML === cells[6].innerHTML &&
      cells[0].innerHTML !== "") ||
    (cells[1].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[7].innerHTML &&
      cells[1].innerHTML !== "") ||
    (cells[2].innerHTML === cells[5].innerHTML &&
      cells[5].innerHTML === cells[8].innerHTML &&
      cells[2].innerHTML !== "") ||
    (cells[0].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[8].innerHTML &&
      cells[0].innerHTML !== "") ||
    (cells[2].innerHTML === cells[4].innerHTML &&
      cells[4].innerHTML === cells[6].innerHTML &&
      cells[2].innerHTML !== "")
  ) {
    alert(`Player ${currentPlayer} wins!`);
    resetBoard();
  }
}

function checkDrawScenario() {
  if (moves === 9) {
    alert("It's a draw!");
    resetBoard();
  }
}

function resetBoard() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  moves = 0;
  currentPlayer = "X";
}
