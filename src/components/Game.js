import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import "../game.css";
import Square from "./Square";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  // const [tied,setTied] = useState("");
  
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
      
    if (winner || squares[i]){
      
      return;
    }
    // select square
    squares[i] = xO;
    
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button className="jmpbtn" onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });


  return (
    <div>
    <h1 className="text-center" id="gametitle">React Tic Tac Toe - With Hooks</h1>
    <div className="brd">
    <Board squares={history[stepNumber]} handleClick={handleClick} />
    </div>
    
    <div className="game">
      <div className="info-wrapper">
      <h3 id="winner">{winner==="tie" ? "Match Tied " :winner ? "Winner: "+winner:"Next Player: "+xO}</h3>
        <div className="stats">
          <h3 id="history" >History</h3>
          {renderMoves()}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Game;