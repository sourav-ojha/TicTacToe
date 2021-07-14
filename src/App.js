import Icons from "./components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(
    Array(9).fill({ value: null, display: null })
  );
  const [isCross, setCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  let winner = { value: null, display: null };

  // Calculate winner
  const calculteWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a].value &&
        squares[a].value === squares[b].value &&
        squares[a].value === squares[c].value
      ) {
        return squares[a];
      }
    }
    return null;
  };
  // end --------------

  winner = calculteWinner(board);

  const playAgain = () => {
    setBoard(Array(9).fill({ value: null, display: null }));
  };

  console.log(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    console.log(i, boardCopy);
    if (winner !== null || boardCopy[i].value !== null) return;
    boardCopy[i].value = isCross ? "X" : "O";
    boardCopy[i].display = isCross ? (
      <Icons choice="cross" />
    ) : (
      <Icons choice="circle" />
    );
    setBoard(boardCopy);
    setCross(!isCross);
  };
  return (
    <div className="App">
      <Board squares={board} onClick={handleClick} />

      <button onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default App;
