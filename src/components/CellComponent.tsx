import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent = ({ cell, selected, click }: CellProps) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure && (
        <img draggable={false} src={cell.figure?.logo as string} alt="" />
      )}
    </div>
  );
};

export default CellComponent;
