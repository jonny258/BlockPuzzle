import { useState, useEffect } from "react";
import PieceSquares from "../PieceSquares";
import "../../styles/Pieces.css";

function Twobytwo({selectedPiece, setSelectedPiece}: {selectedPiece: any, setSelectedPiece: any}) {
 
  // Check if this component is selected
  let isSelect = selectedPiece === "two-by-two";

  const PieceClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the global click handler
    setSelectedPiece("two-by-two");
  };

  // Whenever the global selectedPiece changes, check if this component should update its selected state
  useEffect(() => {
    if (selectedPiece !== "two-by-two") {
      // Other component is selected or selection is cleared, so clear the selection state if it was set for this component
      isSelect = false;
    }
  }, [selectedPiece]);

  return (
    <div
      className={isSelect ? "two-by-two bg-red-600" : "two-by-two bg-red-400"}
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