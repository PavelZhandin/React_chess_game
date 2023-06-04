import { useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());
  return (
    <div className="App">
      <BoardComponent />
    </div>
  );
}

export default App;
