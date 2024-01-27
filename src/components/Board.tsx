import React, { useState } from "react";
import "../styles/Board.css";
import BoardSquares from "./BoardSquares";
import { calculateTwoByTwoSquares } from "../utils/PieceCalculations";

function Board({ selectedPiece, setSelectedPiece }) {
  const [hoveredPieces, setHoveredPieces] = useState([]);
  const [placedPieces, setPlacedPieces] = useState([]);

  const squares = Array(64).fill(null);

  const hoverSquareHandler = (index) => {
    if (selectedPiece.piece === "two-by-two") {
      setHoveredPieces(calculateTwoByTwoSquares(index));
    }
  };

  const boardClickHandler = (event) => {
    event.stopPropagation();
  
    const hasOverlap = hoveredPieces.some(pieceIndex =>
      placedPieces.some(placedPiece => placedPiece.index === pieceIndex)
    );
  
    if (!hasOverlap) {
      const newPlacedPieces = hoveredPieces.map(pieceIndex => ({
        index: pieceIndex,
        color: selectedPiece.color
      }));
      setPlacedPieces([...placedPieces, ...newPlacedPieces]);
  
      setSelectedPiece({
        position: null,
        piece: null,
      });
    }
  };

  return (
    <div className="board-grid" onClick={boardClickHandler}>
      {squares.map((_, index) => (
        <BoardSquares
          key={index}
          index={index}
          isHovered={hoveredPieces.includes(index)}
          onMouseEnter={() => hoverSquareHandler(index)}
          onMouseLeave={() => setHoveredPieces([])}
          placedPieces={placedPieces}
          selectedPiece={selectedPiece}
        />
      ))}
    </div>
  );
}

export default Board;
