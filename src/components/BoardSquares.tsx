import React from "react";
import "../styles/Board.css";

function BoardSquares({ isHovered, onMouseEnter, onMouseLeave }) {
  let className = "square";
  if (isHovered) {
    className += " hovered";
  }

  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  );
}


export default BoardSquares;
