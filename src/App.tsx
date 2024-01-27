import { useState, useEffect } from "react";
import "./App.css";

import Board from "./components/Board";
import PieceBox from "./components/PieceBox";

import Onebyone from "./components/pieces/Square-Shapes/onebyone";
import Twobytwo from "./components/pieces/Square-Shapes/twobytwo";
import Threebythree from "./components/pieces/Square-Shapes/threebythree";

function App() {
  const [selectedPiece, setSelectedPiece] = useState({
    position: null,
    piece: null,
    color: null,
  });
  const [randomPieces, setRandomPieces] = useState([]);
  const pieceTypes = [Onebyone, Twobytwo, Threebythree];

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
  const newRandomPieces = () => {
    const selectedPieces = Array.from({ length: pieceTypes.length }, () => {
      const randomIndex = Math.floor(Math.random() * pieceTypes.length);
      return pieceTypes[randomIndex];
    });

    setRandomPieces(selectedPieces);
  }

  useEffect(() => {
    newRandomPieces()
    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);


  useEffect(() => {
    if(randomPieces.every(piece => piece === null)) {
      newRandomPieces()
    }
  }, [randomPieces]);

  return (
    <>
      <Board
        setSelectedPiece={setSelectedPiece}
        selectedPiece={selectedPiece}
        setRandomPieces={setRandomPieces}
      />
      {randomPieces.length && (
        <PieceBox
          randomPieces={randomPieces}
          setRandomPieces={setRandomPieces}
          setSelectedPiece={setSelectedPiece}
          selectedPiece={selectedPiece}
        />
      )}
    </>
  );
}

export default App;
