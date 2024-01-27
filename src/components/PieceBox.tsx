import React from 'react'
import '../styles/Piece-box.css'
import Twobytwo from './pieces/twobytwo'
import Onebyone from './pieces/onebyone'

function PieceBox({selectedPiece, setSelectedPiece}: {selectedPiece: any, setSelectedPiece: any}) {
  return (
    <div className="piece-box flex justify-between">
      <div className="flex-1 flex justify-center items-center" id="1">
        <Twobytwo setSelectedPiece={setSelectedPiece} selectedPiece={selectedPiece}/>
      </div>
      <div className="flex-1 flex justify-center items-center" id="2">
        <Onebyone />
      </div>
      <div className="flex-1 flex justify-center items-center" id="3">
        <Twobytwo setSelectedPiece={setSelectedPiece} selectedPiece={selectedPiece}/>
      </div>
    </div>
  );
}

export default PieceBox