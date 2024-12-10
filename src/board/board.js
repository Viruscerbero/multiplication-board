import boardStyle from "./boardstyle.module.css";
import { createCellElement, HeaderCell, Cell } from "../cell/cell.js";

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;

export function Board(Multiplier) {
  function clickListener(row, col) {
    if (Multiplier === null) {
      console.error(
        "Unable to connect to the web worker. Please try again later or contact support."
      );

      return;
    }

    Multiplier.postMessage([row, col]);
    // console.log("Message posted to worker");

    Multiplier.onmessage = function (event) {
      // console.log("Message received from worker: " + row + "*" + col + " = " + event.data);

      new Cell([row, col], event.data).showResult();
    };
  }

  let board = document.createElement("div");

  board.classList.add(boardStyle.board);

  board.id = "board";

  let boardFragment = document.createDocumentFragment();

  let boardHorizontalHeader = document.createElement("div");

  boardHorizontalHeader.classList.add(boardStyle["board-horizontal-header"]);

  (function generateHorizontalHeader() {
    for (let ro = 1; ro <= MAX_ROWS; ro++) {
      let cell = HeaderCell(ro);

      boardHorizontalHeader.appendChild(cell);
    }
  })();

  boardFragment.appendChild(boardHorizontalHeader);

  let boardVerticalHeader = document.createElement("div");

  boardVerticalHeader.classList.add(boardStyle["board-vertical-header"]);

  (function generateVerticalHeader() {
    for (let co = 1; co <= MAX_COLUMNS; co++) {
      let cell = HeaderCell(co);

      boardVerticalHeader.appendChild(cell);
    }
  })();

  boardFragment.appendChild(boardVerticalHeader);

  let boardBody = document.createElement("div");

  boardBody.classList.add(boardStyle["board-body"]);

  (function generateCells() {
    for (let ro = 1; ro <= MAX_ROWS; ro++) {
      let row = document.createElement("div");

      row.classList.add(boardStyle.row);

      for (let co = 1; co <= MAX_COLUMNS; co++) {
        let cell = createCellElement(ro, co, clickListener);

        cell.id = `rowcol${ro}${co}`;

        row.appendChild(cell);
      }

      boardBody.appendChild(row);
    }
  })();

  boardFragment.appendChild(boardBody);

  board.appendChild(boardFragment);

  return board;
}
