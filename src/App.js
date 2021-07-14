import Icons from "./components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect, useState } from "react";
import Board from "./components/Board";

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
      console.log(squares[a]);
      return squares[a];
    }
  }
  return null;
};
// end --------------

const notify = (winner) => toast("player " + winner + "  winner");
const notifyErr = (error) => toast(error);

function App() {
  const [board, setBoard] = useState(
    Array(9).fill({ value: null, display: null })
  );
  const [isCross, setCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  let winner = { value: null, display: null };
  var turn = isCross ? <Icons choice="cross" /> : <Icons choice="circle" />;

  winner = calculteWinner(board);
  useEffect(() => {
    if (winner) notify(winner.value);
  }, [isCross]);

  const playAgain = () => {
    setBoard(Array(9).fill({ value: null, display: null }));
  };

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner !== null || boardCopy[i].value !== null) {
      notifyErr("Invalid Input");
      return;
    }
    boardCopy[i] = isCross
      ? { value: "X", display: <Icons choice="cross" /> }
      : { value: "O", display: <Icons choice="circle" /> };

    setBoard(boardCopy);
    setCross(!isCross);
  };

  return (
    <div className="App">
      <div>
        <h1>Tic Tac Toe</h1>
        <Board squares={board} onClick={handleClick} />
        <div className="output">
          <div>
            {winner ? "winner : " : "Player :"}
            {winner ? winner.display : turn}
          </div>
        </div>
        <button className="reset" onClick={playAgain}>
          {winner ? "Play Again" : "Reset"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
