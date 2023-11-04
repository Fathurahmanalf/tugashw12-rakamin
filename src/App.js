import React, { useState } from 'react';
import './index';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextValue, setNextValue] = useState('X');
  const [status, setStatus] = useState(`Next player: ${nextValue}`);
  const [winner, setWinner] = useState(null);

  function selectSquare(square) {
    if (squares[square] || winner) {
      return;
    }
    const newSquares = [...squares];
    newSquares[square] = nextValue;

    setSquares(newSquares);
    setNextValue(calculateNextValue(newSquares));
    const newWinner = calculateWinner(newSquares);
    setWinner(newWinner);
    setStatus(
      calculateStatus(newWinner, newSquares, calculateNextValue(newSquares))
    )
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setNextValue('X');
    setWinner(null);
    setStatus(`Next player: X`);
  }

  function renderSquare(i) {
    return (
      <button
      className="square border border-[#4F4A45] w-20 h-20 bg-[#FFFBF5] text-[#1F1717] text-2xl font-bold focus:outline-none"
      onClick={() => selectSquare(i)}
    >
      {squares[i]}
    </button>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 font-bold text-xl">Tic Tac Toe</div>
      <div className="flex">
        <div className="flex flex-col">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        
        </div>
        <div className="flex flex-col">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="flex flex-col">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button
        className="mt-4 border border-transparent rounded-md bg-[#A9A9A9] text-[#0F0F0F] py-2 px-4 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );
}


function Game() {
  return (
    <div >
      <div >
        <Board />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
