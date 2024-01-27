import React, { useState } from "react";
import "../styles/Board.css";
import BoardSquares from "./BoardSquares";
import {
  calculateTwoByTwoSquares,
  calculateThreeByThreeSquares,
} from "../utils/PieceCalculations";

interface BoardProps {
  selectedPiece: any;
  setSelectedPiece: React.Dispatch<React.SetStateAction<any>>;
  setRandomPieces: React.Dispatch<React.SetStateAction<any>>;
}

const Board: React.FC<BoardProps> = ({
  selectedPiece,
  setSelectedPiece,
  setRandomPieces,
}) => {
  const [hoveredPieces, setHoveredPieces] = useState<number[]>([]);
  const [placedPieces, setPlacedPieces] = useState<any[]>([]);

  const squares = Array(64).fill(null);

  const hoverSquareHandler = (index: number) => {
    if (selectedPiece.piece === "two-by-two") {
      setHoveredPieces(calculateTwoByTwoSquares(index));
    }
    if (selectedPiece.piece === "one-by-one") {
      setHoveredPieces([index]);
    }
    if (selectedPiece.piece === "three-by-three") {
      setHoveredPieces(calculateThreeByThreeSquares(index));
    }
  };

  const boardClickHandler = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();

    const hasOverlap = hoveredPieces.some((pieceIndex) =>
      placedPieces.some((placedPiece) => placedPiece.index === pieceIndex)
    );

    if (!hasOverlap) {
      const newPlacedPieces = hoveredPieces.map((pieceIndex) => ({
        index: pieceIndex,
        color: selectedPiece.color,
      }));
      setPlacedPieces([...placedPieces, ...newPlacedPieces]);

      setRandomPieces(prevArray => {
        const newArray = [...prevArray]
        newArray[selectedPiece.position] = null
        console.log(newArray);
        return newArray;
      });

      // setRandomPieces([null,null, null]);

      setSelectedPiece({
        position: null,
        piece: null,
        // color: null,
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
};

export default Board;
