import { Board } from "./board/board.js";

let Multiplier = null;

if (window.Worker) {
  Multiplier = new Worker(new URL("multiplier-worker.js", import.meta.url));
}

document.querySelector("#app").appendChild(Board(Multiplier));
