import React, { useEffect, useState } from "react";
import "../styles/Board.css";
import BoardSquares from "./BoardSquares";
import {
  calculateTwoByTwoSquares,
  calculateThreeByThreeSquares,
  calculateRightL,
  calculateLeftL,
} from "../utils/PieceCalculations";

interface BoardProps {
  selectedPiece: any;
  setSelectedPiece: React.Dispatch<React.SetStateAction<any>>;
  setRandomPieces: React.Dispatch<React.SetStateAction<any>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Board: React.FC<BoardProps> = ({
  selectedPiece,
  setSelectedPiece,
  setRandomPieces,
  score,
  setScore
}) => {
  const [hoveredPieces, setHoveredPieces] = useState<number[]>([]);
  const [placedPieces, setPlacedPieces] = useState<any[]>([]);
  // const [piecesArr, setPiecesArr] = useState<any[]>(Array(64).fill({
  //   index: null,
  //   color: null,
  //   status: "empty",
  // }));

  useEffect(() => {
    const checkForCompletedLines = () => {
      const rows = Array.from({ length: 8 }, (_, i) =>
        placedPieces.filter((piece) => Math.floor(piece.index / 8) === i)
      );
      const columns = Array.from({ length: 8 }, (_, i) =>
        placedPieces.filter((piece) => piece.index % 8 === i)
      );

      const completedRows = rows.filter((row) => row.length === 8);
      const completedColumns = columns.filter((column) => column.length === 8);

      const completedLines = [...completedRows, ...completedColumns];

      
      
      if (completedLines.length > 0) {
        switch (completedLines.length) {
          case 1:
            setScore((prev: number) => prev + 10);
            break;
          case 2:
            setScore((prev: number) => prev + 20);
            break;
          case 3:
            setScore((prev: number) => prev + 40);
            break;
          case 4:
            setScore((prev: number) => prev + 80);
            break;
          case 5:
            setScore((prev: number) => prev + 160);
            break;
            //Add in an easter egg here
          case 10:
            setScore((prev: number) => prev + 320);
            break;
        }
        const newPlacedPieces = placedPieces.filter(
          (piece) => !completedLines.some((line) => line.includes(piece))
        );
        setPlacedPieces(newPlacedPieces);
      }
    };
    checkForCompletedLines()
  }, [placedPieces]);

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
    if (selectedPiece.piece === "right-l") {
      setHoveredPieces(calculateRightL(index));
    }
    if(selectedPiece.piece === "left-l") {
      setHoveredPieces(calculateLeftL(index));
    }
  };

  const boardClickHandler = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();

    const hasOverlap = hoveredPieces.some((pieceIndex) =>
      placedPieces.some((placedPiece) => placedPiece.index === pieceIndex)
    );

    if (!hasOverlap) {
      setScore((prev: number) => prev + hoveredPieces.length);
      const newPlacedPieces = hoveredPieces.map((pieceIndex) => ({
        index: pieceIndex,
        color: selectedPiece.color,
      }));
      setPlacedPieces([...placedPieces, ...newPlacedPieces]);

      setRandomPieces((prevArray) => {
        const newArray = [...prevArray];
        newArray[selectedPiece.position] = null;
        return newArray;
      });

      

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
