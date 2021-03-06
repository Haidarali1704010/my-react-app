import { SquareValue } from "./components/Game";

type squareWithType = SquareValue | "tie";

export const calculateWinner = (
  squares: ("X" | "O" | null)[]
): squareWithType => {
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
  let j: number,
    count = 0;
  for (j = 0; j < squares.length; j++) {
    if (squares[j] === null) {
      count++;
    }
  }
  if (count === 0) {
    return "tie";
  }
  return null;
};
