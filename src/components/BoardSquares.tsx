import React from "react";
import "../styles/Board.css";

function BoardSquares({
  isHovered,
  onMouseEnter,
  onMouseLeave,
  placedPieces,
  index,
  selectedPiece,
}) {
  let className = "square";
  let backgroundColor = "#ddd";
  let tint = 100;
  if (isHovered) {
    backgroundColor = selectedPiece.color;
    tint = 80;
  }
  const placedPiece = placedPieces.find((p) => p.index === index);
  if (placedPiece) {
    backgroundColor = placedPiece.color;
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        filter: `brightness(${tint}%)`,
      }}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  );
}

export default BoardSquares;
