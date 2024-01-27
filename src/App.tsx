import { useState, useEffect } from "react";
import "./App.css";

import Board from "./components/Board";
import PieceBox from "./components/PieceBox";

function App() {
  const [selectedPiece, setSelectedPiece] = useState({
    position: null,
    piece: null,
    color: null,
  });

  // Handler to reset selected piece
  const handleGlobalClick = (event: MouseEvent) => {
    // If the click is not on a selectable piece, reset the selection
    if (!(event.target as HTMLElement)?.closest(".selectable-piece")) {
      setSelectedPiece({
        position: null,
        piece: null,
        color: null,
      });
    }
  };

  useEffect(() => {
    // Attach the click event listener to the window object
    window.addEventListener("click", handleGlobalClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <>
      <Board
        setSelectedPiece={setSelectedPiece}
        selectedPiece={selectedPiece}
      />
      <PieceBox
        setSelectedPiece={setSelectedPiece}
        selectedPiece={selectedPiece}
      />
    </>
  );
}

export default App;

// I need to make the pieces selectable and then I need to make them draggable, and I need to first make it so that when I select a piece it changes color and doesn't select the other piece
