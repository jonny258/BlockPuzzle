import React, { useState } from 'react';
import '../styles/Board.css';
import BoardSquares from './BoardSquares';

function Board({ selectedPiece, setSelectedPiece }) {
  const [hoveredPieces, setHoveredPieces] = useState([]);

  const squares = Array(64).fill(null);

  const calculateTwoByTwoSquares = (index) => {
    // Assuming a 2x2 piece and an 8x8 board
    const row = Math.floor(index / 8);
    const col = index % 8;
    let hovered = [index];

    if (col < 7) hovered.push(index + 1); // Right
    if (row < 7) hovered.push(index + 8); // Bottom
    if (col < 7 && row < 7) hovered.push(index + 9); // Bottom Right

    return hovered;
  };

  const hoverSquareHandler = (index) => {
    if (selectedPiece.piece === "two-by-two") {
      setHoveredPieces(calculateTwoByTwoSquares(index));
    }
  };

  return (
    <div className="board-grid">
      {squares.map((_, index) => (
        <BoardSquares
          key={index}
          isHovered={hoveredPieces.includes(index)}
          onMouseEnter={() => hoverSquareHandler(index)}
          onMouseLeave={() => setHoveredPieces([])}
        />
      ))}
    </div>
  );
}


export default Board;