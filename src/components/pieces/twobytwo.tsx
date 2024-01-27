import { useRef } from "react";
import PieceSquares from "../PieceSquares";
import "../../styles/Pieces.css";

interface TwobytwoProps {
  selectedPiece: any; // Replace 'any' with a specific type if possible
  setSelectedPiece: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the state type
}

const Twobytwo: React.FC<TwobytwoProps> = ({
  selectedPiece,
  setSelectedPiece,
}) => {
  const pieceRef = useRef<any>();

  const PieceClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the global click handler
    if (pieceRef.current) {
      console.log(pieceRef.current?.parentNode?.id);
      setSelectedPiece({
        position: pieceRef.current?.parentNode?.id,
        piece: "two-by-two",
        color: "#df2929",
      });
    }
    console.log(selectedPiece);
  };

  return (
    <div
      ref={pieceRef}
      className={
        selectedPiece.position === pieceRef.current?.parentNode?.id
          ? "two-by-two selected"
          : "two-by-two"
      }
      onClick={PieceClickHandler}
    >
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
      <PieceSquares />
    </div>
  );
};

export default Twobytwo;
