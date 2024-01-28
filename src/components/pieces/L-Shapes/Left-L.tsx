import { useRef } from "react";
import PieceSquares from "../../PieceSquares";
import "../../../styles/Pieces.css";

interface LeftLProps {
  selectedPiece: any; 
  setSelectedPiece: React.Dispatch<React.SetStateAction<any>>; 
}

const LeftL: React.FC<LeftLProps> = ({
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
        piece: "left-l",
        color: "#bde702",
      });
    }
    console.log(selectedPiece);
  };

  return (
    <div
      ref={pieceRef}
      className={
        selectedPiece.position === pieceRef.current?.parentNode?.id
          ? "left-l selected"
          : "left-l"
      }
      onClick={PieceClickHandler}
    >
      <PieceSquares className={"l-block"}/>
      <PieceSquares className={"l-block"}/>
      <PieceSquares className={"l-block"}/>
      <PieceSquares className={"l-block"}/>
    </div>
  );
};

export default LeftL;
