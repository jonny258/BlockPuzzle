import { useRef } from "react";
import PieceSquares from "../../PieceSquares";

interface OnebyoneProps {
  selectedPiece: any; // Replace 'any' with a specific type if possible
  setSelectedPiece: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the state type
}

const Onebyone: React.FC<OnebyoneProps> = ({
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
        piece: "one-by-one",
        color: "#ea00fffb",
      });
    }
    console.log(selectedPiece);
  }
  return (
    <div
    ref={pieceRef}
    className={
      selectedPiece.position === pieceRef.current?.parentNode?.id
        ? "one-by-one selected"
        : "one-by-one"
    }
    onClick={PieceClickHandler}
  >
      <PieceSquares className={""}/>
    </div>
  );
};

export default Onebyone;
