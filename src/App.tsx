import { useState } from "react";
import "./App.css";

import Board from "./components/Board";
import PieceBox from "./components/PieceBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board />
      <PieceBox />
    </>
  );
}

export default App;
