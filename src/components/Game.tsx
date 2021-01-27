import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import "../game.css";


export type SquareValue = "X" | "O" | null;

const Game = () => {
  const [history, setHistory] = useState<{squares:SquareValue[]}[]>([{squares:Array(9).fill(null)}]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXisNext] = useState<boolean>(true);
  const [winner,setWinner] = useState<SquareValue | "tie">(null);
  const xO:"X" |"O" = xIsNext ? "X" : "O";
  
  
  const handleClick = (i:number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current= historyPoint[stepNumber];
    const squares = current.squares.slice();
    const winner1 = calculateWinner(current.squares);
    setWinner(winner1);
    // return if won or occupied
      
    if (winner1 || squares[i]){
      
      return;
    }
    // select square
    squares[i] = xIsNext ? "X" : "O";
    setHistory(historyPoint.concat([
      {
        squares: squares
      }
    ]));
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
    //setWinner(winner1);
    
  };

  const jumpTo = (step:number) => {
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
    //const checkWin  = winner1==="tie" ? "Match Tied " :winner1 ? "Winner: "+winner1:"Next Player: "+xIsNext ? "X" : "O";

  return (
    <>
    <h1 className="text-center" id="gametitle">React Tic Tac Toe - With Hooks</h1>
    <div className="brd">
    <Board squares={history[stepNumber] } handleClick={handleClick} />
    </div>
    
    <div className="game">
      <div className="info-wrapper">
      <h3 id="winner">{winner==="tie" ? "Match Tied " :winner ? "Winner: " + winner:"Next Player: " + xO}</h3>
        <div className="stats">
          <h3 id="history" >History</h3>
          {renderMoves()}
        </div>
      </div>
    </div>
    </>
  );
};

export default Game;