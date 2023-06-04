import React from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent = ({ board, setBoard }: BoardProps) => {
  return (
    <div className="board">
      {/* <div className="cell white"></div>
      <div className="cell black"></div>
      <div className="cell white"></div>
      <div className="cell black"></div> */}
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id + index} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
