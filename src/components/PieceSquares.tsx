
import '../styles/Pieces.css'

interface PieceSquaresProps {
  className: string;
}

function PieceSquares({ className }: PieceSquaresProps) {
  return (
    <div className={`piece-square ${className}`}></div>
  );
}

export default PieceSquares;