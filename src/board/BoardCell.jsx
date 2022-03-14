import React from "react";

const cellStyles = {
  backgroundColor: "#1C1F21",
  borderRadius: "10px",
};

const BoardCell = ({ id }) => {
  const isOddNumberCell = () => id % 2 !== 0;

  if (isOddNumberCell() === true) return <div style={cellStyles} />;
  return <div />;
};

export default BoardCell;
