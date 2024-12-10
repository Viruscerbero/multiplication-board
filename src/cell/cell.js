import cellStyle from "./cell.module.css";

export function Cell([row, col], data) {
  const cell = document.querySelector(`#rowcol${row}${col}`);

  this.fadeOut = function () {
    cell.classList.remove(cellStyle.answer, cellStyle.blurout);

    cell.classList.add(cellStyle.question);

    cell.innerHTML = "<div><span>¿</span><span>?</span></div>";

    this.timeoutID = undefined;
  };

  this.showResult = function () {
    cell.classList.remove(cellStyle.question);

    cell.classList.add(cellStyle.answer, cellStyle.blurout);

    cell.innerHTML = `<div><span>${data}</span></div>`;

    if (typeof this.timeoutID === "number") {
      clearTimeout(this.timeoutID);
    }

    this.timeoutID = setTimeout(() => {
      this.fadeOut();
    }, 2000);
  };
}

export function createCellElement(ro, co, listener) {
  const cell = document.createElement("button");

  cell.classList.add(cellStyle.cell, cellStyle.question);

  cell.innerHTML = "<div><span>¿</span><span>?</span></div>";

  cell.addEventListener("click", listener.bind(this, ro, co));

  return cell;
}

export function HeaderCell(num) {
  let cell = document.createElement("div");

  cell.classList.add(cellStyle.cell, cellStyle.header);

  cell.innerHTML = num;

  return cell;
}
