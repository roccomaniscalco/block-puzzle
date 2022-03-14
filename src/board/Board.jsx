import { useState } from "react";
import BoardGrid from "./BoardGrid";

const defaultBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Board = () => {
  const [board, setBoard] = useState(defaultBoard);

  return (
    <BoardGrid>
      {board.map((column) =>
        column.map(() => (
          <div style={{ backgroundColor: "#1C1F21", borderRadius: "10px" }} />
        ))
      )}
    </BoardGrid>
  );
};

export default Board;
