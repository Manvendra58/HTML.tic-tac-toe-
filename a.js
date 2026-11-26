
let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];
const jsConfetti = new JSConfetti()
let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", function() {

        if (board[index] !== "" || !gameActive) {
            return;
        }

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWinner();
       
    });
});

function checkWinner() {

    for (let pattern of winningPatterns) {
        let [a, b, c] = pattern;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            statusText.textContent =
                "Player " + currentPlayer + " Wins!";

            gameActive = false;
             jsConfetti.addConfetti()
            return;
        }
    }

    if (!board.includes("")) {
        statusText.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    statusText.textContent =
        "Player " + currentPlayer + "'s Turn";
}

function restartGame() {

    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = "";
    });

    statusText.textContent = "Player X's Turn";
}
  