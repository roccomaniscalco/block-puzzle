import { node } from "prop-types";
import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",

  padding: "2rem"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gridTemplateRows: "repeat(9, 1fr)",
  gap: "2vw",

  width: "80vw",
  height: "80vw",
};

const BoardGrid = ({ children }) => {
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>{children}</div>
    </div>
  );
};

BoardGrid.propTypes = {
  children: node,
};

export default BoardGrid;
