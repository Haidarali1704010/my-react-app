import React from "react";
import { SquareValue } from "./Game";
import Square from "./Square";

interface Prop {
  squares:{squares:SquareValue[]};
  handleClick:(i:number)  => void 
}

const Board = ({squares, handleClick}:Prop):React.ReactElement => (
  <div className="board">
    {squares.squares.map((square, i:number) => (
      <Square key={i} value={square} currsquare={i} handleClick={handleClick} />
    ))}
  </div>
);

export default Board;