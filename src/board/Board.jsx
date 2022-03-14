import { useState } from "react";
import BoardCell from "./BoardCell";
import BoardGrid from "./BoardGrid";

const defaultBoard = [
  [
    {
      id: 0,
      isActive: false,
    },
    {
      id: 1,
      isActive: false,
    },
    {
      id: 2,
      isActive: false,
    },
    {
      id: 3,
      isActive: false,
    },
    {
      id: 4,
      isActive: false,
    },
    {
      id: 5,
      isActive: false,
    },
    {
      id: 6,
      isActive: false,
    },
    {
      id: 7,
      isActive: false,
    },
    {
      id: 8,
      isActive: false,
    },
  ],
  [
    {
      id: 9,
      isActive: false,
    },
    {
      id: 10,
      isActive: false,
    },
    {
      id: 11,
      isActive: false,
    },
    {
      id: 12,
      isActive: false,
    },
    {
      id: 13,
      isActive: false,
    },
    {
      id: 14,
      isActive: false,
    },
    {
      id: 15,
      isActive: false,
    },
    {
      id: 16,
      isActive: false,
    },
    {
      id: 17,
      isActive: false,
    },
  ],
  [
    {
      id: 18,
      isActive: false,
    },
    {
      id: 19,
      isActive: false,
    },
    {
      id: 20,
      isActive: false,
    },
    {
      id: 21,
      isActive: false,
    },
    {
      id: 22,
      isActive: false,
    },
    {
      id: 23,
      isActive: false,
    },
    {
      id: 24,
      isActive: false,
    },
    {
      id: 25,
      isActive: false,
    },
    {
      id: 26,
      isActive: false,
    },
  ],
  [
    {
      id: 27,
      isActive: false,
    },
    {
      id: 28,
      isActive: false,
    },
    {
      id: 29,
      isActive: false,
    },
    {
      id: 30,
      isActive: false,
    },
    {
      id: 31,
      isActive: false,
    },
    {
      id: 32,
      isActive: false,
    },
    {
      id: 33,
      isActive: false,
    },
    {
      id: 34,
      isActive: false,
    },
    {
      id: 35,
      isActive: false,
    },
  ],
  [
    {
      id: 36,
      isActive: false,
    },
    {
      id: 37,
      isActive: false,
    },
    {
      id: 38,
      isActive: false,
    },
    {
      id: 39,
      isActive: false,
    },
    {
      id: 40,
      isActive: false,
    },
    {
      id: 41,
      isActive: false,
    },
    {
      id: 42,
      isActive: false,
    },
    {
      id: 43,
      isActive: false,
    },
    {
      id: 44,
      isActive: false,
    },
  ],
  [
    {
      id: 45,
      isActive: false,
    },
    {
      id: 46,
      isActive: false,
    },
    {
      id: 47,
      isActive: false,
    },
    {
      id: 48,
      isActive: false,
    },
    {
      id: 49,
      isActive: false,
    },
    {
      id: 50,
      isActive: false,
    },
    {
      id: 51,
      isActive: false,
    },
    {
      id: 52,
      isActive: false,
    },
    {
      id: 53,
      isActive: false,
    },
  ],
  [
    {
      id: 54,
      isActive: false,
    },
    {
      id: 55,
      isActive: false,
    },
    {
      id: 56,
      isActive: false,
    },
    {
      id: 57,
      isActive: false,
    },
    {
      id: 58,
      isActive: false,
    },
    {
      id: 59,
      isActive: false,
    },
    {
      id: 60,
      isActive: false,
    },
    {
      id: 61,
      isActive: false,
    },
    {
      id: 62,
      isActive: false,
    },
  ],
  [
    {
      id: 63,
      isActive: false,
    },
    {
      id: 64,
      isActive: false,
    },
    {
      id: 65,
      isActive: false,
    },
    {
      id: 66,
      isActive: false,
    },
    {
      id: 67,
      isActive: false,
    },
    {
      id: 68,
      isActive: false,
    },
    {
      id: 69,
      isActive: false,
    },
    {
      id: 70,
      isActive: false,
    },
    {
      id: 71,
      isActive: false,
    },
  ],
  [
    {
      id: 72,
      isActive: false,
    },
    {
      id: 73,
      isActive: false,
    },
    {
      id: 74,
      isActive: false,
    },
    {
      id: 75,
      isActive: false,
    },
    {
      id: 76,
      isActive: false,
    },
    {
      id: 77,
      isActive: false,
    },
    {
      id: 78,
      isActive: false,
    },
    {
      id: 79,
      isActive: false,
    },
    {
      id: 80,
      isActive: false,
    },
  ],
];

const Board = () => {
  const [board, setBoard] = useState(defaultBoard);

  return (
    <BoardGrid>
      {board.map((column) =>
        column.map((row) => <BoardCell key={row.id} id={row.id} />)
      )}
    </BoardGrid>
  );
};

export default Board;
