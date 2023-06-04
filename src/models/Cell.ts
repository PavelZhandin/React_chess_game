import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

type Nullable<T> = T | null;

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;

  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number; // Для react ключей

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Nullable<Figure>
  ) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.available = false;
    this.id = Math.random();
  }
}
