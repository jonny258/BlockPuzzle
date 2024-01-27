import { useRef } from "react";
import PieceSquares from "../../PieceSquares";
import "../../../styles/Pieces.css";

interface ThreebythreeProps {
  selectedPiece: any; 
  setSelectedPiece: React.Dispatch<React.SetStateAction<any>>; 
}

const Threebythree: React.FC<ThreebythreeProps> = ({
  selectedPiece,
  setSelectedPiece,
}) => {
  const pieceRef = useRef<any>();

  const PieceClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (pieceRef.current) {
      console.log(pieceRef.current?.parentNode?.id);
      setSelectedPiece({
        position: pieceRef.current?.parentNode?.id,
        piece: "three-by-three",
        color: "#18e611",
      });
    }
    console.log(selectedPiece);
  };

  return (
    <div
      ref={pieceRef}
      className={
        selectedPiece.position === pieceRef.current?.parentNode?.id
          ? "three-by-three selected"
          : "three-by-three"
      }
      onClick={PieceClickHandler}
    >
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
    </div>
  );
};

export default Threebythree;
