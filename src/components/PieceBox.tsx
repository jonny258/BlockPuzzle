import "../styles/Piece-box.css";

interface PieceBoxProps {
  selectedPiece: any;
  setSelectedPiece: React.Dispatch<React.SetStateAction<any>>;
  randomPieces: any;
  setRandomPieces: React.Dispatch<React.SetStateAction<any>>;
}

const PieceBox: React.FC<PieceBoxProps> = ({
  selectedPiece,
  setSelectedPiece,
  randomPieces,
  setRandomPieces,
}) => {
  const Piece1 = randomPieces[0];
  const Piece2 = randomPieces[1];
  const Piece3 = randomPieces[2];

  console.log(randomPieces);
  return (
    <div className="piece-box flex justify-between">
      <div className="flex-1 flex justify-center items-center" id="0">
        {randomPieces[0] && (
          <Piece1
            setSelectedPiece={setSelectedPiece}
            selectedPiece={selectedPiece}
          />
        )}
      </div>
      <div className="flex-1 flex justify-center items-center" id="1">
        {randomPieces[1] && (
          <Piece2
            setSelectedPiece={setSelectedPiece}
            selectedPiece={selectedPiece}
          />
        )}
      </div>
      <div className="flex-1 flex justify-center items-center" id="2">
        {randomPieces[2] && (
          <Piece3
            setSelectedPiece={setSelectedPiece}
            selectedPiece={selectedPiece}
          />
        )}
      </div>
    </div>
  );
};

export default PieceBox;
