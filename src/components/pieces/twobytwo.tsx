import { useState, useEffect, useRef } from "react";
import PieceSquares from "../PieceSquares";
import "../../styles/Pieces.css";

function Twobytwo({
  selectedPiece,
  setSelectedPiece,
}: {
  selectedPiece: any;
  setSelectedPiece: any;
}) {
  const pieceRef = useRef();

  const PieceClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the global click handler
    if (pieceRef.current) {
      console.log(pieceRef.current?.parentNode?.id);
      setSelectedPiece({
        position: pieceRef.current?.parentNode?.id,
        piece: "two-by-two",
      });
    }
    console.log(selectedPiece)
  };

  return (
    <div
      ref={pieceRef}
      className={selectedPiece.position === pieceRef.current?.parentNode?.id ? "two-by-two bg-red-600" : "two-by-two bg-red-400"}
      onClick={PieceClickHandler}
    >
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
    </div>
  );
}

export default Twobytwo;
