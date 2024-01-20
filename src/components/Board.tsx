import React from 'react';
import '../styles/Board.css'; // Import the CSS file
import BoardSquares from './BoardSquares'; // Import BoardSquares component

function Board() {
  const squares = Array(64).fill(null);

  return (
    <div className="board-grid">
      {squares.map((_, index) => (
        <BoardSquares key={index} />
      ))}
    </div>
  );
}

export default Board;
