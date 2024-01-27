
import '../styles/Piece-box.css'
import Twobytwo from './pieces/Square-Shapes/twobytwo'
import Onebyone from './pieces/Square-Shapes/onebyone'
import Threebythree from './pieces/Square-Shapes/threebythree'

function PieceBox({selectedPiece, setSelectedPiece}: {selectedPiece: any, setSelectedPiece: any}) {
  return (
    <div className="piece-box flex justify-between">
      <div className="flex-1 flex justify-center items-center" id="1">
        <Twobytwo setSelectedPiece={setSelectedPiece} selectedPiece={selectedPiece}/>
      </div>
      <div className="flex-1 flex justify-center items-center" id="2">
        <Onebyone setSelectedPiece={setSelectedPiece} selectedPiece={selectedPiece}/>
      </div>
      <div className="flex-1 flex justify-center items-center" id="3">
        <Threebythree setSelectedPiece={setSelectedPiece} selectedPiece={selectedPiece}/>
      </div>
    </div>
  );
}

export default PieceBox